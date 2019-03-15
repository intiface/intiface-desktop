import * as child_process from "child_process";
import * as path from "path";
import * as protobuf from "protobufjs";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceUtils } from "./Utils";
import { EventEmitter } from "events";
import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { CertGenerator } from "./CertGenerator";

// Handles execution and lifetime of server processes, as well as translation of
// the protobuf protocol.
//
// Events (incoming ProtoBuf messages):
// - processstarted
// - processended
// - buttpluglog
// - guilog
// - clientconnected
// - clientdisconnected
// - deviceconnected
// - devicedisconnected
export class ServerProcess extends EventEmitter {

  private _serverProcess: child_process.ChildProcess | null = null;
  private _config: IntifaceConfiguration;

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._config = aConfig;
    process.on("beforeExit", () => {
      this.ShutdownServer();
    });
  }

  public async RunServer() {
    const args: string[] = await this.BuildServerArguments();
    console.log(args);
    const [p, res, rej] = IntifaceUtils.MakePromise();
    // Now we start up our external process.
    this._serverProcess =
      child_process.execFile(path.join(IntifaceUtils.UserConfigDirectory, "engine", "Buttplug.Server.CLI"),
                             args,
                             {
                               encoding: "binary",
                               maxBuffer: 1024768,
                             },
                             (error: Error, stdout: string | Buffer, stderr: string | Buffer) => {
                               if (error) {
                                 rej(error);
                                 this._serverProcess = null;
                               }
                               res();
                             });
    this._serverProcess.stdout!.addListener("data", (d: string) => {
      // We'll always get strings from stdin, but we know they've been encoded
      // binary on the other end, so we should just be able to change them to
      // buffers here.
      const buf = Buffer.from(d, "binary");
      this.ParseMessages(buf);
    });

    this._serverProcess.on("exit", (code: number, signal: string) => {
      this.emit("exit", code);
      this._serverProcess = null;
    });
    await p;
  }

  public async StopServer() {
    const msg = IntifaceProtocols.ServerControlMessage.create({
      stop: IntifaceProtocols.ServerControlMessage.Stop.create(),
    });
    this.SendMessage(msg);
  }

  protected async BuildServerArguments() {
    const args: string[] = new Array<string>();
    // args.push(`--servername`, `${this._config.ServerName}`);
    // args.push(`--deviceconfig ${this._config.ServerName}`);
    // args.push(`--userdeviceconfig `);
    // First, we set up our incoming pipe to receive GUI info from the CLI
    // process
    args.push(`--guipipe`);
    if (this._config.ListenOnIpcServer) {
      args.push("--ipcserver");
      args.push(`--ipcpipe`, `${this._config.IpcServerPipeName}`);
    }
    if (this._config.ListenOnWebsocketServer) {
      args.push("--websocketserver");
      if (this._config.WebsocketServerAllInterfaces) {
        args.push(`--websocketallinterfaces`);
      }
      if (this._config.WebsocketServerUseInsecurePort) {
        args.push(`--insecureport`, `${this._config.WebsocketServerInsecurePort}`);
      }
      if (this._config.WebsocketServerUseSecurePort) {
        const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory, this._config);
        if (await cg.HasGeneratedCerts()) {
          args.push(`--secureport`, `${this._config.WebsocketServerSecurePort}`);
          args.push(`--certfile`, `${cg.CertFilePath}`);
          args.push(`--privfile`, `${cg.PrivKeyFilePath}`);
        }
      }
    }
    // args.push(`--pingtime`, `${this._config.ServerMaxPingTime}`);
    // args.push(`--log`, `${this._config.ServerLogLevel}`);
    return args;
  }

  private async SendMessage(aMsg: IntifaceProtocols.ServerControlMessage) {
    if (!this._serverProcess || !this._serverProcess.stdin) {
      // TODO Should error here.
      return;
    }

    const buf = IntifaceProtocols.ServerControlMessage.encodeDelimited(aMsg).finish();
    this._serverProcess.stdin.write(buf);
  }

  private ShutdownServer() {
    // TODO Check to see if process is still alive, if it is, wait for shutdown.
  }

  private ParseMessages(aData: Buffer) {
    const reader = protobuf.Reader.create(aData);
    while (reader.pos < reader.len ) {
      console.log(reader.pos);
      // TODO Sucks that we'll have to parse this twice, once here and once in the
      // frontend. Not sure how to serialize to frontend and not lose typing tho.
      const msg = IntifaceProtocols.ServerProcessMessage.decodeDelimited(reader);
      if (msg.processEnded !== null) {
        // Process will not send messages after this, shut down listener. This is
        // the only type of message the server currently needs to care about.
        this.ShutdownServer();
      }
      console.log(msg);
      const newMsg = IntifaceProtocols.IntifaceBackendMessage.create({
        serverProcessMessage: msg,
      });
      this.emit("process_message", newMsg);
    }
  }
}
