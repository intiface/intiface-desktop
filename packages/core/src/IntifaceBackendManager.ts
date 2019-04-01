import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";
import { GithubReleaseManager } from "./GithubReleaseManager";
import { CertGenerator } from "./CertGenerator";
import { IntifaceUtils } from "./Utils";
import { IApplicationUpdater } from "./IApplicationUpdater";

// The link between whatever our frontend is (Electron, express, etc) and our
// IntifaceCLI server process. This will handle loading/saving our configuration
// file, bringing up/shutting down processes, etc...
//
// This module will need to exist in whatever the parent process of our setup
// is, i.e. the process that can actually touch files and network. It will
// communicate with the GUI via a specialized FrondendConnector class.
export class IntifaceBackendManager {

  public static async Create(aConnector: BackendConnector, aUpdater: IApplicationUpdater):
  Promise<IntifaceBackendManager> {
    const config = await IntifaceConfigurationFileManager.Create();
    return new IntifaceBackendManager(aConnector, config, aUpdater);
  }

  private _connector: BackendConnector;
  private _process: ServerProcess | null = null;
  private _configManager: IntifaceConfigurationManager;
  private _applicationUpdater: IApplicationUpdater;

  protected constructor(aConnector: BackendConnector,
                        aConfig: IntifaceConfigurationFileManager,
                        aApplicationUpdater: IApplicationUpdater) {
    this._connector = aConnector;
    this._configManager = aConfig;
    this._applicationUpdater = aApplicationUpdater;
    // TODO This isn't really handled if something goes wrong. We should at
    // least catch and log.
    this._connector.addListener("message", async (msg) => await this.ReceiveFrontendMessage(msg));
  }

  public async Shutdown() {
    if (this._process !== null) {
      await this._process.StopServer();
      this._process = null;
    }
  }

  private UpdateDownloadProgress(aProgress: any) {
    this._connector.UpdateDownloadProgress(aProgress);
  }

  private UpdateFrontendConfiguration() {
    this._connector.UpdateFrontendConfiguration(this._configManager.Config);
  }

  private async StartProcess(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    this._process = new ServerProcess(this._configManager.Config);
    this._process.addListener("process_message", (aProcessMsg: IntifaceProtocols.IntifaceBackendMessage) => {
      this._connector.SendMessage(aProcessMsg);
    });
    this._process.addListener("exit", () => {
      const stopMsg = IntifaceProtocols.IntifaceBackendMessage.create({
        serverProcessMessage: IntifaceProtocols.ServerProcessMessage.create({
          processEnded: IntifaceProtocols.ServerProcessMessage.ProcessEnded.create(),
        }),
      });
      this._connector.SendMessage(stopMsg);
      this._process = null;
    });
    await this._process.RunServer();
  }

  private async StopProcess(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (this._process) {
      // This will fire the exit event, which will set the process to null and
      // update the frontend.
      await this._process.StopServer();
    }
  }

  private async UpdateEngine(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
    await ghManager.DownloadLatestEngineVersion();
    ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
    // Once we're done with a download, make sure to save our config and
    // update our frontend.
    this.UpdateFrontendConfiguration();
  }

  private async UpdateDeviceFile(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
    await ghManager.DownloadLatestDeviceFileVersion();
    ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
    // Once we're done with a download, make sure to save our config and
    // update our frontend.
    await this._configManager!.Save();
    this.UpdateFrontendConfiguration();
  }

  private async UpdateApplication(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    await this._applicationUpdater.DownloadUpdate();
  }

  private async GenerateCert(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory, this._configManager.Config);
    if (!(await cg.HasGeneratedCerts())) {
      await cg.GenerateCerts();
    }
    this._connector.SendMessage(IntifaceProtocols.IntifaceBackendMessage.create({
      certificateGenerated: IntifaceProtocols.IntifaceBackendMessage.CertificateGenerated.create(),
    }));
  }

  private async RunCertificateAcceptanceServer(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
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
  }

  private async CheckForUpdates(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const hasAppUpdate = await this._applicationUpdater.CheckForUpdate();
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    const hasEngineUpdate = await ghManager.CheckForNewEngineVersion();
    const hasDeviceFileUpdate = await ghManager.CheckForNewDeviceFileVersion();
    this._configManager!.Config.EngineUpdateAvailable = hasEngineUpdate;
    this._configManager!.Config.ApplicationUpdateAvailable = hasAppUpdate;
    this._configManager!.Config.DeviceFileUpdateAvailable = hasDeviceFileUpdate;
    await this._configManager!.Save();
    this.UpdateFrontendConfiguration();
  }

  private async ReceiveFrontendMessage(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startProcess !== null) {
      await this.StartProcess(aMsg);
      return;
    }

    if (aMsg.stopProcess !== null) {
      await this.StopProcess(aMsg);
      return;
    }

    if (aMsg.startProxy !== null) {
      // TODO Fill in once proxy is done
      return;
    }

    if (aMsg.ready !== null) {
      this.UpdateFrontendConfiguration();
      return;
    }

    if (aMsg.updateConfig !== null) {
      this._configManager.Config.Load(JSON.parse(aMsg.updateConfig!.configuration!));
      this._configManager.Save();
      return;
    }

    if (aMsg.updateEngine !== null) {
      await this.UpdateEngine(aMsg);
      return;
    }

    if (aMsg.updateDeviceFile !== null) {
      await this.UpdateDeviceFile(aMsg);
      return;
    }

    if (aMsg.updateApplication !== null) {
      await this.UpdateApplication(aMsg);
      return;
    }

    if (aMsg.generateCertificate !== null) {
      await this.GenerateCert(aMsg);
      return;
    }

    if (aMsg.runCertificateAcceptanceServer !== null) {
      await this.RunCertificateAcceptanceServer(aMsg);
      return;
    }

    if (aMsg.checkForUpdates !== null) {
      await this.CheckForUpdates(aMsg);
      return;
    }

    console.log(`Message has no usable payload! ${aMsg}`);
  }
}
