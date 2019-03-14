import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";
import { GithubReleaseManager } from "./GithubReleaseManager";
import { CertGenerator } from "./CertGenerator";
import { IntifaceUtils } from "./Utils";

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
  private _configManager: IntifaceConfigurationManager;

  protected constructor(aConnector: BackendConnector, aConfig: IntifaceConfigurationFileManager) {
    this._connector = aConnector;
    this._configManager = aConfig;
    this._connector.addListener("message", (msg) => this.ReceiveFrontendMessage(msg));
  }

  private UpdateDownloadProgress(aProgress: any) {
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      downloadProgress: IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.create({
        bytesReceived: aProgress.receivedBytes,
        bytesTotal: aProgress.totalBytes,
      }),
    });
    this._connector.SendMessage(msg);
  }

  private UpdateFrontendConfiguration() {
      const msg = IntifaceProtocols.IntifaceBackendMessage.create({
        configuration: IntifaceProtocols.IntifaceBackendMessage.Configuration.create({
          configuration: JSON.stringify(this._configManager.Config),
        }),
      });
      this._connector.SendMessage(msg);
  }

  private async ReceiveFrontendMessage(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startProcess !== null) {
      console.log("Starting server?!");
      this._process = new ServerProcess(this._configManager.Config);
      this._process.addListener("process_message", (aProcessMsg: IntifaceProtocols.IntifaceBackendMessage) => {
        this._connector.SendMessage(aProcessMsg);
      });
      this._process.RunServer();
    } else if (aMsg.stopProcess !== null) {
      if (this._process) {
        console.log("Stopping server?!");
        await this._process.StopServer();
        this._process = null;
      }
    } else if (aMsg.startProxy !== null) {
    } else if (aMsg.ready !== null) {
      this.UpdateFrontendConfiguration();
    } else if (aMsg.updateConfig !== null) {
      this._configManager.Config.Load(JSON.parse(aMsg.updateConfig!.configuration!));
      this._configManager.Save();
    } else if (aMsg.updateEngine !== null) {
      const ghManager = new GithubReleaseManager(this._configManager.Config);
      ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
      ghManager.DownloadLatestEngineVersion().then(() => {
        ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
        // Once we're done with a download, make sure to save our config and
        // update our frontend.
        this._configManager!.Save().then(() => {
          console.log(this._configManager!.Config!.CurrentEngineVersion);
          this.UpdateFrontendConfiguration();
        });
      });
    } else if (aMsg.updateDeviceFile !== null) {
      const ghManager = new GithubReleaseManager(this._configManager.Config);
      ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
      ghManager.DownloadLatestDeviceFileVersion().then(() => {
        ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
        // Once we're done with a download, make sure to save our config and
        // update our frontend.
        this._configManager!.Save().then(() => {
          console.log(this._configManager!.Config!.CurrentEngineVersion);
          this.UpdateFrontendConfiguration();
        });
      });
    } else if (aMsg.generateCertificate !== null) {
      const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory, this._configManager.Config);
      if (!(await cg.HasGeneratedCerts())) {
        await cg.GenerateCerts();
      }
      this._connector.SendMessage(IntifaceProtocols.IntifaceBackendMessage.create({
        certificateGenerated: IntifaceProtocols.IntifaceBackendMessage.CertificateGenerated.create(),
      }));
    } else if (aMsg.runCertificateAcceptanceServer !== null) {
      const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory, this._configManager.Config);
      if (!(await cg.HasGeneratedCerts())) {
        // TODO Should probably error here
        return;
      }
      await cg.RunCertAcceptanceServer();
      const msg = IntifaceProtocols.IntifaceBackendMessage.create({
        certificateAcceptanceServerRunning:
        IntifaceProtocols.IntifaceBackendMessage.CertificateAcceptanceServerRunning.create({
          insecurePort: cg.InsecurePort,
        }),
      });
      this._connector.SendMessage(msg);
    } else {
      console.log(`Message has no usable payload! ${aMsg}`);
    }
  }
}
