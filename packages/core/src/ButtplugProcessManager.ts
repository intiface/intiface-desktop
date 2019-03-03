import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import * as fs from "fs";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";

// The link between whatever our frontend is (Electron, express, etc) and our
// Buttplug server process. This will handle loading/saving our configuration
// file, bringing up/shutting down processes, etc...
//
// This module will need to exist in whatever the parent process of our setup
// is, i.e. the process that can actually touch files and network. It will
// communicate with the GUI via a specialized FrondendConnector class.
export class ButtplugProcessManager {

  private _defaultConfigPath: string = "~/.buttplugrc";
  private _connector: BackendConnector;
  private _process: ServerProcess | null;
  private _config: IntifaceConfigurationManager;

  public constructor(aConnector: BackendConnector) {
    this._connector = aConnector;
    this._config =
      new IntifaceConfigurationFileManager(IntifaceConfigurationFileManager.DEFAULT_CONFIG_PATH);
    this._connector.addListener("message", (msg) => this.ReceiveFrontendMessage(msg));
  }

  private ReceiveFrontendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startprocess !== null) {
      this._process = new ServerProcess();
      // Process message just hands the raw Protobuf buffer through so we don't
      // have to reencode it.
      this._process.addListener("processmessage", (aProcessMsg: IntifaceProtocols.ServerBackendMessage) => {
        this._connector.SendMessage(aProcessMsg);
      });
      this._process.RunServer();
    } else if (aMsg.stopprocess !== null) {
    } else if (aMsg.startproxy !== null) {
    } else if (aMsg.ready !== null) {
      const msg = IntifaceProtocols.ServerBackendMessage.create({
        configuration: IntifaceProtocols.ServerBackendMessage.Configuration.create({
          configuration: JSON.stringify(this._config.Config),
        }),
      });
      this._connector.SendMessage(msg);
    } else if (aMsg.updateconfig !== null) {
      this._config.Config.Load(JSON.parse(aMsg.updateconfig!.configuration!));
      this._config.Save();
    } else {
      console.log(`Message has no payload! ${aMsg}`);
    }
  }
}
