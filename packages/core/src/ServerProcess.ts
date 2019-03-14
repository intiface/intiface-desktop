import * as net from "net";
import * as child_process from "child_process";
import * as path from "path";
import * as fs from "fs";
import { promisify } from "util";
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

  private static GUI_PIPE_NAME: string = path.join(IntifaceUtils.UserConfigDirectory, "ButtplugGUIPipe");

  // IPC pipe for relaying server process status out to the frontend.
  private _cliMessageServer: net.Server | null = null;
  private _cliMessageClient: net.Socket | null = null;
  private _serverProcess: child_process.ChildProcess;
  private _config: IntifaceConfiguration;

  // If we need to front the ipc server with our own websocket server, we'll
  // still need an IPC client to the server which we'll proxy through our own
  // websocket. Mmmm, overly complicated.
  private _ipcClient: net.Socket;

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._config = aConfig;
    process.on("beforeExit", () => {
      this.ShutdownServer();
    });
  }

  public async RunServer() {
    const args: string[] = await this.BuildServerArguments();

    this._cliMessageServer = net.createServer();
    this._cliMessageServer.addListener("connection", (s) => {
      this._cliMessageClient = s;
      this._cliMessageClient.addListener("data", (d) => {
        this.ParseMessage(d);
      });
    });

    const exists = promisify(fs.exists);
    const unlink = promisify(fs.unlink);
    if (await exists(ServerProcess.GUI_PIPE_NAME)) {
      await unlink(ServerProcess.GUI_PIPE_NAME);
    }

    this._cliMessageServer.listen(ServerProcess.GUI_PIPE_NAME);

    const [p, res, rej] = IntifaceUtils.MakePromise();
    // Now we start up our external process.
    console.log(args);
    this._serverProcess =
      child_process.execFile(path.join(IntifaceUtils.UserConfigDirectory, "engine", "Buttplug.Server.CLI"),
                             args,
                             (error: Error, stdout: string | Buffer, stderr: string | Buffer) => {
                               if (error) {
                                 rej(error);
                               }
                               res();
                             });
    this._serverProcess.stdout.on("data", (out: string) => {
      console.log(`stdout: ${out}`);
    });
    this._serverProcess.stderr.on("data", (out: string) => {
      console.log(`stderr: ${out}`);
    });
    this._serverProcess.on("exit", (code: number, signal: string) => {
      this.emit("exit", code);
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
    args.push(`--guipipe`, `${ServerProcess.GUI_PIPE_NAME}`);
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
    if (!this._cliMessageClient) {
      // TODO Should error here.
      return;
    }
    const buf = IntifaceProtocols.ServerControlMessage.encode(aMsg).finish();
    this._cliMessageClient!.write(buf);
  }

  private ShutdownServer() {
    // TODO Should probably await this?
    if (this._cliMessageClient !== null) {
      this._cliMessageClient.end();
    }
    if (this._cliMessageServer !== null) {
      this._cliMessageServer.close();
      this._cliMessageServer = null;
    }
    // TODO Check to see if process is still alive, if it is, wait for shutdown.
  }

  private ParseMessage(aData: Buffer) {
    // TODO Sucks that we'll have to parse this twice, once here and once in the
    // frontend. Not sure how to serialize to frontend and not lose typing tho.
    const msg = IntifaceProtocols.ServerProcessMessage.decode(aData);
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
