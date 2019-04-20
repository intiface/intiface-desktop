import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";
import { GithubReleaseManager } from "./GithubReleaseManager";
import { CertGenerator } from "./CertGenerator";
import { IntifaceUtils } from "./Utils";
import { IApplicationUpdater } from "./IApplicationUpdater";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import * as winston from "winston";

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
    IntifaceBackendLogger.Logger.debug("Creating Backend Manager");
    const config = await IntifaceConfigurationFileManager.Create();
    const manager = new IntifaceBackendManager(aConnector, config, aUpdater);
    await manager.Initialize();
    return manager;
  }

  private _logger: winston.Logger;
  private _connector: BackendConnector;
  private _process: ServerProcess | null = null;
  private _configManager: IntifaceConfigurationManager;
  private _applicationUpdater: IApplicationUpdater;

  protected constructor(aConnector: BackendConnector,
                        aConfig: IntifaceConfigurationFileManager,
                        aApplicationUpdater: IApplicationUpdater) {
    this._logger = IntifaceBackendLogger.GetChildLogger(this.constructor.name);
    this._logger.debug("Constructing Backend Manager");
    this._connector = aConnector;
    this._configManager = aConfig;
    this._applicationUpdater = aApplicationUpdater;
    // TODO This isn't really handled if something goes wrong. We should at
    // least catch and log.
    this._connector.addListener("message", async (msg) => await this.ReceiveFrontendMessage(msg));
  }

  public async Shutdown() {
    if (this._connector) {
      this._connector.IsExiting = true;
    }
    if (this._process !== null) {
      await this._process.StopServer();
      this._process = null;
    }
  }

  private async Initialize() {
    // Do all of the file system update checks when we're created, before we've
    // shipped off the configuration to the frontend.
    await this.CheckForCertificates();
    await this.CheckForEngineExecutable();
    if (this._configManager.Config.CheckForUpdatesOnStart) {
      try {
        await this.CheckForUpdates(null);
      } catch (e) {
        this._logger.warn("Update check failed, continuing.");
      }
    }
  }

  private UpdateDownloadProgress(aProgress: any) {
    this._connector.UpdateDownloadProgress(aProgress);
  }

  private UpdateFrontendConfiguration(aMsg: IntifaceProtocols.IntifaceFrontendMessage | null = null) {
    this._logger.debug("Updating frontend configuration.");
    this._connector.UpdateFrontendConfiguration(this._configManager.Config, aMsg);
  }

  private async StartProcess(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (!this.CheckForEngineExecutable()) {
      this.UpdateFrontendConfiguration();
      this._connector.SendError(aMsg, "Cannot find engine executable to run. Please reinstall engine.");
      return;
    }
    this._process = new ServerProcess(this._configManager.Config);

    this._process.addListener("process_message", (aProcessMsg: IntifaceProtocols.IntifaceBackendMessage) => {
      this._connector.SendMessage(aProcessMsg);
    });
    this._process.addListener("exit", () => {
      // We expect that we'll get a process ended message before the process
      // quits. If not, expect that the engine crashed.
      this._process = null;
    });
    try {
      await this._process.RunServer();
      this._connector.SendOk(aMsg);
    } catch (e) {
      this._connector.SendError(aMsg, e.message);
    }
  }

  private async StopProcess(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (this._process) {
      // This will fire the exit event, which will set the process to null and
      // update the frontend.
      await this._process.StopServer();
    }
    this._connector.SendOk(aMsg);
  }

  private async CheckForEngineExecutable(): Promise<boolean> {
    const checkServer = new ServerProcess(this._configManager.Config);
    this._configManager.Config.HasUsableEngineExecutable = await checkServer.CheckForUsableExecutable();
    this._configManager.Save();
    return this._configManager.Config.HasUsableEngineExecutable;
  }

  private async CheckForCertificates(): Promise<boolean> {
    this._configManager.Config.HasCertificates = await CertGenerator.HasCerts();
    this._configManager.Save();
    return this._configManager.Config.HasCertificates;
  }

  private async UpdateEngine(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
    try {
      await ghManager.DownloadLatestEngineVersion();
    } catch (e) {
      this._connector.SendError(aMsg, (e as Error).message);
      return;
    } finally {
      ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
    }
    // Once we're done with a download, make sure to save our config and update
    // our frontend.
    await this.CheckForEngineExecutable();
    this.UpdateFrontendConfiguration();
    this._connector.SendOk(aMsg);
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
    this._connector.SendOk(aMsg);
  }

  private async UpdateApplication(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    try {
      this._applicationUpdater.addListener("progress", this.UpdateDownloadProgress.bind(this));
      await this._applicationUpdater.DownloadUpdate();
      this._applicationUpdater.QuitAndInstall();
      this._connector.SendOk(aMsg);
    } finally {
      this._applicationUpdater.removeListener("progress", this.UpdateDownloadProgress.bind(this));
    }
  }

  private async GenerateCert(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory);
    if (!(await cg.HasGeneratedCerts())) {
      await cg.GenerateCerts();
      // Use the certificate check to update the new configuration file values
      this.CheckForCertificates();
      this.UpdateFrontendConfiguration();
    }
    this._connector.SendMessage(IntifaceProtocols.IntifaceBackendMessage.create({
      certificateGenerated: IntifaceProtocols.IntifaceBackendMessage.CertificateGenerated.create(),
    }));
    this._connector.SendOk(aMsg);
  }

  private async RunCertificateAcceptanceServer(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory);
    if (!(await cg.HasGeneratedCerts())) {
      // TODO Should probably error here
      return;
    }
    await cg.RunCertAcceptanceServer(this._configManager.Config.WebsocketServerSecurePort);
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      certificateAcceptanceServerRunning:
      IntifaceProtocols.IntifaceBackendMessage.CertificateAcceptanceServerRunning.create({
        insecurePort: cg.InsecurePort,
      }),
    });
    this._connector.SendMessage(msg);
  }

  private async CheckForUpdates(aMsg: IntifaceProtocols.IntifaceFrontendMessage | null) {
    this._logger.info("Checking for updates.");
    try {
      const hasAppUpdate = await this._applicationUpdater.CheckForUpdate();
      this._configManager!.Config.ApplicationUpdateAvailable = hasAppUpdate;
      this._logger.info(`Has application update: ${hasAppUpdate}`);
    } catch (e) {
      // This will fail during dev mode and who knows when else.
      this._logger.warn(`Application updater check failed: ${(e as Error).message}.`);
    }
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    const hasEngineUpdate = await ghManager.CheckForNewEngineVersion();
    const hasDeviceFileUpdate = await ghManager.CheckForNewDeviceFileVersion();
    this._configManager.Config.EngineUpdateAvailable = hasEngineUpdate;
    this._logger.info(`Has engine update: ${hasEngineUpdate}`);
    this._configManager.Config.DeviceFileUpdateAvailable = hasDeviceFileUpdate;
    this._logger.info(`Has device file update: ${hasDeviceFileUpdate}`);
    await this._configManager!.Save();
    this.UpdateFrontendConfiguration();
    if (aMsg !== null) {
      this._connector.SendOk(aMsg);
    }
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
      this._logger.debug("Received ready signal from frontend");
      this.UpdateFrontendConfiguration(aMsg);
      return;
    }

    if (aMsg.updateConfig !== null) {
      // Always make sure we have a (mostly) valid engine before we start. If
      // the exe is corrupted or something, welp.
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

    this._logger.warn(`Message has no usable payload! ${aMsg}`);
  }
}
