import * as fs from "fs";
import * as selfsigned from "selfsigned";
import * as path from "path";
import * as http from "http";
import * as https from "https";
import * as opn from "opn";
import * as url from "url";
import { promisify } from "util";

export class CertGenerator {

  public static readonly CERT_FILENAME = "cert.pem";
  public static readonly PRIVKEY_FILENAME = "privkey.pem";

  public readonly InsecurePort = 1024 + Math.floor((Math.random() * (65535 - 1024)));
  private readonly SecurePort = 1024 + Math.floor((Math.random() * (65535 - 1024)));
  private CertPath: string;
  private CertFilePath: string;
  private PrivKeyFilePath: string;
  private httpServer: http.Server | null = null;
  private httpsServer: https.Server | null = null;
  private httpPage = `<html>
<head><title>Intiface Certificate Setup</title></head>
<body>
<h1>Welcome the Intiface Certificate Setup page.</h1>

<p>This page will help you set up the self signed certificate for using
Intiface with web browsers.</p>

<a href="https://127.0.0.1:{port}" target="_blank">Click here to open a tab to the HTTPS server.</a>
</body>
</html>
`;
  private httpsPage = `<html>
<head><title>Intiface Certificate Setup Complete</title></head>
<body>
<h1>Intiface Certificate Setup Finished!</h1>
<iframe src="?done=1" width=0 height=0></iframe>
</body>
</html>
`;

  public constructor(aPath: string) {
    this.CertPath = aPath;
    this.CertFilePath = path.join(aPath, CertGenerator.CERT_FILENAME);
    this.PrivKeyFilePath = path.join(aPath, CertGenerator.PRIVKEY_FILENAME);

  }

  public async GenerateCerts(): Promise<void> {
    const exists = promisify(fs.exists);

    if (await exists(this.CertFilePath) || await exists(this.PrivKeyFilePath)) {
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
    const page = this.httpPage.replace("{port}", this.SecurePort.toString());
    aRes.end(page);
  }

  public HttpsServerResponse(aReq: http.IncomingMessage, aRes: http.ServerResponse) {
    aRes.writeHead(200);
    const queryData = url.parse(aReq.url!, true).query;
    if (queryData.done) {
      this.StopServer();
    }
    aRes.end(this.httpsPage);
  }

  public StopServer() {
    if (this.httpServer) {
      this.httpServer!.close();
      this.httpServer = null;
    }
    if (this.httpsServer) {
      this.httpsServer!.close();
      this.httpsServer = null;
    }
  }

  public async RunCertAcceptanceServer(): Promise<void> {
    this.httpServer = http.createServer(this.HttpServerResponse.bind(this)).listen(this.InsecurePort, "127.0.0.1");
    const certStrs = await this.LoadCerts();

    this.httpsServer = https.createServer({
      cert: certStrs.cert,
      key: certStrs.privkey,
    }, this.HttpsServerResponse.bind(this)).listen(this.SecurePort, "127.0.0.1");
    opn(`http://127.0.0.1:${this.InsecurePort}`);
  }
}
