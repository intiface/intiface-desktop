import * as child_process from "child_process";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";
import { Reader } from "protobufjs";
import { promisify } from "util";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceUtils } from "./Utils";
import { EventEmitter } from "events";
import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { CertManager } from "./CertManager";
import { ButtplugLogLevel } from "buttplug";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import * as winston from "winston";

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

  public static EXECUTABLE_NAME = "IntifaceCLI" + (os.platform() === "win32" ? ".exe" : "");

  private _gotProcessEnded = false;
  private _serverProcess: child_process.ChildProcess | null = null;
  private _config: IntifaceConfiguration;
  private _logger: winston.Logger;
  private _msgBuffer: Buffer = Buffer.from([]);

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._logger = IntifaceBackendLogger.GetChildLogger(this.constructor.name);
    this._config = aConfig;
    process.addListener("beforeExit", this.StopServer);
  }

  public async CheckForUsableExecutable(): Promise<boolean> {
    try {
      console.log(await this.GetServerExecutablePath());
    } catch (e) {
      return false;
    }
    return true;
  }

  public get GotProcessEnded(): boolean {
    return this._gotProcessEnded;
  }

  public async RunServer() {
    this._gotProcessEnded = false;
    const args: string[] = await this.BuildServerArguments();
    let hasResolved = false;
    const [p, res, rej] = IntifaceUtils.MakePromise();
    const exeFile = await this.GetServerExecutablePath();
    this._logger.info(`Running ${exeFile} with arguments ${args}`);
    // Now we start up our external process.
    this._serverProcess =
      child_process.execFile(exeFile,
        args,
        {
          encoding: "binary",
          maxBuffer: 1024768,
          cwd: path.dirname(exeFile),
        },
        (error: Error, stdout: string | Buffer, stderr: string | Buffer) => {
          if (error) {
            rej(error);
            this._serverProcess = null;
            return;
          } else if (!hasResolved) {
            res();
            hasResolved = true;
          }
        });
    this._serverProcess.stdout!.addListener("data", (d: string) => {
      // We'll always get strings from stdin, but we know they've been encoded
      // binary on the other end, so we should just be able to change them to
      // buffers here.
      const buf = Buffer.from(d, "binary");
      this.ParseMessages(buf);
      // If we've successfully parsed a message, then consider the server
      // running.
      if (!hasResolved) {
        this._logger.debug("Server process sent first message, continuing.");
        res();
        hasResolved = true;
      }
    });

    this._serverProcess.on("exit", (code: number, signal: string) => {
      this._logger.debug("Server process exited.");
      this.emit("exit", code);
      this._serverProcess = null;
    });
    await p;
  }

  public async StopServer() {
    this._logger.debug("Stopping currently running server.");
    process.removeListener("beforeExit", this.StopServer);
    const msg = IntifaceProtocols.ServerControlMessage.create({
      stop: IntifaceProtocols.ServerControlMessage.Stop.create(),
    });
    await this.SendMessage(msg);
    this._logger.debug("Waiting for server to go down.");
  }

  protected async BuildServerArguments() {
    const args: string[] = new Array<string>();
    args.push(`--servername`, `${this._config.ServerName}`);
    // Let rust use its internal device config.
    if (this._config.Engine != "rs") {
      args.push(`--deviceconfig`, `${IntifaceUtils.DeviceConfigFilePath}`);
    }
    // args.push(`--userdeviceconfig `);
    // First, we set up our incoming pipe to receive GUI info from the CLI
    // process
    args.push(`--frontendpipe`);
    args.push(`--stayopen`);
    if (this._config.UseWebsocketServerInsecure || this._config.UseWebsocketServerSecure) {
      if (this._config.WebsocketServerAllInterfaces) {
        args.push(`--wsallinterfaces`);
      }
      if (this._config.UseWebsocketServerInsecure) {
        args.push(`--wsinsecureport`, `${this._config.WebsocketServerInsecurePort}`);
      }
      if (this._config.UseWebsocketServerSecure && this._config.HasCertificates) {
        const cg = new CertManager(IntifaceUtils.UserConfigDirectory);
        if (await cg.HasGeneratedCerts()) {
          args.push(`--wssecureport`, `${this._config.WebsocketServerSecurePort}`);
          args.push(`--wscertfile`, `${cg.CertFilePath}`);
          args.push(`--wsprivfile`, `${cg.PrivKeyFilePath}`);
        }
      }
    }
    if (this._config.ServerLogLevel !== "Off") {
      args.push(`--log`, `${this._config.ServerLogLevel}`);
    }
    if (this._config.ServerMaxPingTime > 0) {
      args.push(`--pingtime`, `${this._config.ServerMaxPingTime}`);
    }

    return args;
  }

  private async SendMessage(aMsg: IntifaceProtocols.ServerControlMessage) {
    if (!this._serverProcess || !this._serverProcess.stdin) {
      // TODO Should error here.
      return;
    }
    try {
      const buf = IntifaceProtocols.ServerControlMessage.encodeDelimited(aMsg).finish();
      this._serverProcess.stdin.write(buf);
    } catch (e) {
      this._logger.error("GOT ERROR TRYING TO ENCODE MESSAGE");
      this._logger.error(e);
    }

  }

  private ParseMessages(aData: Buffer) {
    let current_buffer = Buffer.concat([this._msgBuffer, aData]);
    this._msgBuffer = Buffer.from([]);
    // console.log("CURRENT BUFFER LEN:" + current_buffer.length);
    let reader = Reader.create(current_buffer);
    let our_reader = Reader.create(current_buffer);
    while (reader.pos < reader.len) {
      // For some reason, using a reader does not hold state here. The reader
      // position never advances. Therefore we have to manage this ourselves.
      try {
        let next_msg_len = our_reader.uint32();
        if (our_reader.pos + next_msg_len > our_reader.len) {
          this._msgBuffer = current_buffer.slice(reader.pos);
          break;
        }
        our_reader.pos += next_msg_len;
        const msg = IntifaceProtocols.ServerProcessMessage.decodeDelimited(current_buffer.slice(reader.pos));
        reader.pos = our_reader.pos;
        if (msg.processEnded !== null) {
          this._logger.debug("Server process ended, notified via process message.");
          this._gotProcessEnded = true;
          // Process will not send messages after this, shut down listener. This is
          // the only type of message the server currently needs to care about.
          this.StopServer();
        } else if (msg.deviceConnected !== null) {
          this._logger.info(`Device Connected: ${msg.deviceConnected!.deviceName}`);
        } else if (msg.deviceDisconnected !== null) {
          this._logger.info(`Device Disconnected: ${msg.deviceDisconnected!.deviceId}`);
        } else if (msg.processLog !== null) {
          this._logger.info(`Process Log: ${msg.processLog!.message}`);
        }
        const newMsg = IntifaceProtocols.IntifaceBackendMessage.create({
          serverProcessMessage: msg,
        });
        this.emit("process_message", newMsg);
      } catch {
        this._logger.error("MESSAGE PARSING HAS FALLEN OUT OF SYNC. CONTACT SUPPORT");
        break;
      }
    }
  }

  private async GetServerExecutablePath(): Promise<string> {
    if (this._config.Engine !== this._config.InstalledEngineType) {
      return Promise.reject(new Error("Wrong engine type installed. Please run 'Force Engine Download' on Settings > Versions and Updates"));
    }

    const exists = promisify(fs.exists);
    const readFile = promisify(fs.readFile);
    const exePathFile = path.join(IntifaceUtils.UserConfigDirectory, "enginepath.txt");
    if (!(await exists(exePathFile))) {
      return Promise.reject(new Error(`Cannot find engine path file at ${exePathFile}.`));
    }
    const exePath = (await readFile(exePathFile, { encoding: "utf8" })).trim();
    if (!(await exists(exePath))) {
      return Promise.reject(new Error(`Server executable install location ${exePath} does not exist.`));
    }
    const exeFile = path.join(exePath, ServerProcess.EXECUTABLE_NAME);
    if (!(await exists(exeFile))) {
      return Promise.reject(new Error(`Server executable file ${exeFile} does not exist.`));
    }
    return exeFile;
  }
}
