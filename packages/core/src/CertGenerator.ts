import * as fs from "fs";
import * as selfsigned from "selfsigned";
import * as path from "path";
import * as http from "http";
import * as https from "https";
import * as opn from "opn";
import * as url from "url";
import { promisify } from "util";
import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { IntifaceUtils } from "./Utils";

export class CertGenerator {

  public static readonly CERT_FILENAME = "cert.pem";
  public static readonly PRIVKEY_FILENAME = "privkey.pem";

  public static async HasCerts(): Promise<boolean> {
    const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory);
    return await cg.HasGeneratedCerts();
  }

  public readonly CertFilePath: string;
  public readonly PrivKeyFilePath: string;
  // This port can be random
  public readonly InsecurePort = 1024 + Math.floor((Math.random() * (65535 - 1024)));
  // This port must be the same as the port we've got listed in our config
  private _securePort: number;
  private _certPath: string;
  private _httpServer: http.Server | null = null;
  private _httpsServer: https.Server | null = null;
  private _httpsPage = `<html>
<head><title>Intiface Certificate Setup Complete</title></head>
<body>
<h1>Intiface Certificate Setup Finished!</h1>
<p>You may now close this browser tab and return to the Intiface Application</p>
<iframe src="?done=1" width=0 height=0></iframe>
</body>
</html>
`;

  public constructor(aPath: string) {
    this._certPath = aPath;
    this.CertFilePath = path.join(aPath, CertGenerator.CERT_FILENAME);
    this.PrivKeyFilePath = path.join(aPath, CertGenerator.PRIVKEY_FILENAME);
  }

  public async HasGeneratedCerts(): Promise<boolean> {
    const exists = promisify(fs.exists);
    return await exists(this.CertFilePath) && await exists(this.PrivKeyFilePath);
  }

  public async GenerateCerts(): Promise<void> {
    if (await this.HasGeneratedCerts()) {
      throw new Error("Please remove cert.pem and private.pem files before generating new keys.");
    }
    const pems = selfsigned.generate(undefined, { days: 9999 });

    const writeFile = promisify(fs.writeFile);
    await writeFile(this.CertFilePath, pems.cert);
    await writeFile(this.PrivKeyFilePath, pems.private);
  }

  public async LoadCerts(): Promise<{ cert: string, privkey: string }> {
    const readFile = promisify(fs.readFile);
    const certStr = await readFile(this.CertFilePath, { encoding: "utf-8" });
    const privStr = await readFile(this.PrivKeyFilePath, { encoding: "utf-8" });
    return {
      cert: certStr,
      privkey: privStr,
    };
  }

  public HttpServerResponse(aReq: http.IncomingMessage, aRes: http.ServerResponse) {
    aRes.writeHead(200);
    aRes.end(this.HttpPage);
  }

  public HttpsServerResponse(aReq: http.IncomingMessage, aRes: http.ServerResponse) {
    aRes.writeHead(200);
    const queryData = url.parse(aReq.url!, true).query;
    if (queryData.done) {
      this.StopServer();
    }
    aRes.end(this._httpsPage);
  }

  public StopServer() {
    if (this._httpServer) {
      this._httpServer!.close();
      this._httpServer = null;
    }
    if (this._httpsServer) {
      this._httpsServer!.close();
      this._httpsServer = null;
    }
  }

  public async RunCertAcceptanceServer(aSecurePort: number): Promise<void> {
    this._httpServer = http.createServer(this.HttpServerResponse.bind(this)).listen(this.InsecurePort, "127.0.0.1");
    this._securePort = aSecurePort;
    console.log(`Insecure Cert Acceptance Server listening on 127.0.0.1:${this.InsecurePort}`);
    const certStrs = await this.LoadCerts();

    this._httpsServer = https.createServer({
      cert: certStrs.cert,
      key: certStrs.privkey,
    }, this.HttpsServerResponse.bind(this)).listen(aSecurePort, "127.0.0.1");
    console.log(`Secure Cert Acceptance Server listening on 127.0.0.1:${this._securePort}`);
    opn(`http://127.0.0.1:${this.InsecurePort}`);
  }

  private get HttpPage(): string {
  return `<html>
<head><title>Intiface Certificate Setup</title></head>
<body>
<h1>Welcome the Intiface Certificate Setup page.</h1>

<p>This page will help you set up the self signed certificate for using
Intiface with web browsers.</p>

<a href="https://127.0.0.1:${this._securePort}" target="_blank">Click here to open a tab to the HTTPS server.</a>
</body>
</html>
`;
  }
}
