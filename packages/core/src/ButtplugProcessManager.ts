import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";

export class ButtplugProcessManager {
  private _connector: BackendConnector;
  private _process: ServerProcess | null;
  private _config: IntifaceConfigurationManager = new IntifaceConfigurationManager();

  public constructor(aConnector: BackendConnector) {
    this._connector = aConnector;
    this._config.Load("~/.buttplugrc");
    this._connector.addListener("message", (msg) => this.ReceiveFrontendMessage(msg));
  }

  private ReceiveFrontendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startprocess !== null) {
      this._process = new ServerProcess();
      // Process message just hands the raw Protobuf buffer through so we don't
      // have to reencode it.
      this._process.addListener("processmessage", (aProcessMsg: IntifaceProtocols.ServerProcessMessage) => {
        this._connector.SendMessage(aProcessMsg);
      });
      this._process.RunServer();
    } else if (aMsg.stopprocess !== null) {
    } else if (aMsg.startproxy !== null) {
    } else if (aMsg.stopproxy !== null) {
    } else if (aMsg.updateconfig !== null) {
      this._config.Config.Load(aMsg.updateconfig!.configuration!);
      this._config.Save("~/.buttplugrc");
    }
  }
}
