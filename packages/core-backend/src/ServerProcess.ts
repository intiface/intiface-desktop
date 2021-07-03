import * as child_process from "child_process";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";
import { Reader } from "protobufjs";
import { promisify } from "util";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceUtils, IntifaceConfiguration } from "intiface-core-library";
import { EventEmitter } from "events";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import { IntifaceBackendUtils } from "./Utils";
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
  private _backend_logger: winston.Logger;
  private _process_logger: winston.Logger;
  private _buttplug_logger: winston.Logger;
  private _msgBuffer: Buffer = Buffer.from([]);

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._backend_logger = IntifaceBackendLogger.GetChildLogger("backend", this.constructor.name);
    this._process_logger = IntifaceBackendLogger.GetChildLogger("process", this.constructor.name);
    this._buttplug_logger = IntifaceBackendLogger.GetChildLogger("buttplug", this.constructor.name);
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
    this._backend_logger.info(`Running ${exeFile} ${args.join(' ')}`);
    // Now we start up our external process.
    this._serverProcess =
      child_process.spawn(exeFile,
        args,
        {
          cwd: path.dirname(exeFile),
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
        this._backend_logger.debug("Server process sent first message, continuing.");
        res();
        hasResolved = true;
      }
    });

    this._serverProcess.on("exit", (code: number, signal: string) => {
      this._backend_logger.debug("Server process exited.");
      this.emit("exit", code);
      this._serverProcess = null;
    });
    await p;
  }

  public async StopServer() {
    this._backend_logger.debug("Stopping currently running server.");
    process.removeListener("beforeExit", this.StopServer);
    const msg = IntifaceProtocols.ServerControlMessage.create({
      stop: IntifaceProtocols.ServerControlMessage.Stop.create(),
    });
    await this.SendMessage(msg);
    this._backend_logger.debug("Waiting for server to go down.");
  }

  protected async BuildServerArguments() {
    const args: string[] = new Array<string>();
    args.push(`--servername`, `${this._config.ServerName}`);
    const exists = promisify(fs.exists);
    if (await exists(IntifaceBackendUtils.DeviceConfigFilePath)) {
      args.push(`--deviceconfig`, `${IntifaceBackendUtils.DeviceConfigFilePath}`);
    }
    // args.push(`--userdeviceconfig `);
    // First, we set up our incoming pipe to receive GUI info from the CLI
    // process
    args.push(`--frontendpipe`);
    args.push(`--stayopen`);
    if (this._config.UseWebsocketServerInsecure) {
      if (this._config.WebsocketServerAllInterfaces) {
        args.push(`--wsallinterfaces`);
      }
      if (this._config.UseWebsocketServerInsecure) {
        args.push(`--wsinsecureport`, `${this._config.WebsocketServerInsecurePort}`);
      }
    }
    if (this._config.ServerLogLevel !== "Off") {
      args.push(`--log`, `${this._config.ServerLogLevel}`);
    }
    if (this._config.ServerMaxPingTime > 0) {
      args.push(`--pingtime`, `${this._config.ServerMaxPingTime}`);
    }

    // Opt-out services

    if (!this._config.WithBluetoothLE) {
      args.push('--without-bluetooth-le');
    }
    if (!this._config.WithHID) {
      args.push('--without-hid');
    }
    if (!this._config.WithLovenseHIDDongle) {
      args.push('--without-lovense-dongle-hid');
    }
    if (!this._config.WithLovenseSerialDongle) {
      args.push('--without-lovense-dongle-serial');
    }
    if (!this._config.WithSerialPort) {
      args.push('--without-serial');
    }
    if (!this._config.WithXInput) {
      args.push('--without-xinput');
    }

    // Opt-in services

    if (this._config.WithLovenseConnectService) {
      args.push('--with-lovense-connect');
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
      this._backend_logger.error("GOT ERROR TRYING TO ENCODE MESSAGE");
      this._backend_logger.error(e);
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
          this._backend_logger.debug("Server process ended, notified via process message.");
          this._gotProcessEnded = true;
          // Process will not send messages after this, shut down listener. This is
          // the only type of message the server currently needs to care about.
          this.StopServer();
        } else if (msg.deviceConnected !== null) {
          this._backend_logger.info(`Device Connected: ${msg.deviceConnected!.deviceName}`);
        } else if (msg.deviceDisconnected !== null) {
          this._backend_logger.info(`Device Disconnected: ${msg.deviceDisconnected!.deviceId}`);
        } else if (msg.processLog !== null) {
          // This is super gross, but due to how the async portions of the
          // system work, we can't create span fields with the right scoping. So
          // target parsing it is.
          let log_json = msg.processLog!.message!;
          try {
            let json = JSON.parse(log_json);
            console.log(json);
            if ("target" in json) {
              if ((json["target"] as string).startsWith("intiface_cli::")) {
                this._process_logger.log((json["level"] as string).toLowerCase(), json["fields"]["message"]);
              } else if ((json["target"] as string).startsWith("buttplug::")) {
                this._buttplug_logger.log((json["level"] as string).toLowerCase(), json["fields"]["message"]);
              } else {
                throw 0;
              }
            } else {
              // Just print old style
              throw 0;
            }
          } catch (ex) {
            console.log(ex);
            // If this doesn't load as JSON, just act like it's an old style
            // process log. This allows us to keep supporting order binaries for
            // now while we wait for people upgrade.
            this._process_logger.info(`Process Log: ${msg.processLog!.message}`);
          }
        } else if (msg.clientRejected !== null) {
          this._backend_logger.debug("Client rejected from server, raising error.");
        }
        const newMsg = IntifaceProtocols.IntifaceBackendMessage.create({
          serverProcessMessage: msg,
        });
        this.emit("process_message", newMsg);
      } catch {
        this._backend_logger.error("MESSAGE PARSING HAS FALLEN OUT OF SYNC. CONTACT SUPPORT");
        break;
      }
    }
  }

  private async GetServerExecutablePath(): Promise<string> {
    const exists = promisify(fs.exists);
    const readFile = promisify(fs.readFile);
    const exePath = path.join(IntifaceBackendUtils.UserConfigDirectory, "engine");
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
