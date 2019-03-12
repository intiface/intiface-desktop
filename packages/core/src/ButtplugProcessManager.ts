import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import * as fs from "fs";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";
import { IntifaceUtils } from "./Utils";
import { GithubReleaseManager } from "./GithubReleaseManager";

// The link between whatever our frontend is (Electron, express, etc) and our
// Buttplug server process. This will handle loading/saving our configuration
// file, bringing up/shutting down processes, etc...
//
// This module will need to exist in whatever the parent process of our setup
// is, i.e. the process that can actually touch files and network. It will
// communicate with the GUI via a specialized FrondendConnector class.
export class ButtplugProcessManager {

  public static async Create(aConnector: BackendConnector): Promise<ButtplugProcessManager> {
    const config = await IntifaceConfigurationFileManager.Create();
    return new ButtplugProcessManager(aConnector, config);
  }

  private _connector: BackendConnector;
  private _process: ServerProcess | null;
  private _config: IntifaceConfigurationManager;

  protected constructor(aConnector: BackendConnector, aConfig: IntifaceConfigurationFileManager) {
    this._connector = aConnector;
    this._config = aConfig;
    this._connector.addListener("message", (msg) => this.ReceiveFrontendMessage(msg));
  }

  private UpdateDownloadProgress(aProgress: any) {
    const msg = IntifaceProtocols.ServerBackendMessage.create({
      downloadprogress: IntifaceProtocols.ServerBackendMessage.DownloadProgress.create({
        bytesReceived: aProgress.receivedBytes,
        bytesTotal: aProgress.totalBytes,
      }),
    });
    this._connector.SendMessage(msg);
  }

  private UpdateFrontendConfiguration() {
      const msg = IntifaceProtocols.ServerBackendMessage.create({
        configuration: IntifaceProtocols.ServerBackendMessage.Configuration.create({
          configuration: JSON.stringify(this._config.Config),
        }),
      });
      this._connector.SendMessage(msg);
  }

  private ReceiveFrontendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startprocess !== null) {
      // this._process = new ServerProcess();
      // this._process.addListener("processmessage", (aProcessMsg: IntifaceProtocols.ServerBackendMessage) => {
      //   this._connector.SendMessage(aProcessMsg);
      // });
      // this._process.RunServer();
    } else if (aMsg.stopprocess !== null) {
    } else if (aMsg.startproxy !== null) {
    } else if (aMsg.ready !== null) {
      this.UpdateFrontendConfiguration();
    } else if (aMsg.updateconfig !== null) {
      this._config.Config.Load(JSON.parse(aMsg.updateconfig!.configuration!));
      this._config.Save();
    } else if (aMsg.updateengine !== null) {
      const ghManager = new GithubReleaseManager(this._config.Config);
      ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
      ghManager.DownloadLatestEngineVersion().then(() => {
        ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
        // Once we're done with a download, make sure to save our config and
        // update our frontend.
        this._config!.Save().then(() => {
          console.log(this._config!.Config!.CurrentEngineVersion);
          this.UpdateFrontendConfiguration();
        });
      });
    } else {
      console.log(`Message has no usable payload! ${aMsg}`);
    }
  }
}
