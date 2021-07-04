import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager, IntifaceUtils } from "intiface-core-library";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";
import { GithubReleaseManager } from "./GithubReleaseManager";
import { IApplicationUpdater } from "./IApplicationUpdater";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import { IntifaceBackendUtils } from "./Utils";
import { EventEmitter } from "events";
import isOnline from "is-online";
import * as winston from "winston";
import * as rimraf from "rimraf";
import * as fs from "fs";
import { promisify } from "util";

// The link between whatever our frontend is (Electron, express, etc) and our
// IntifaceCLI server process. This will handle loading/saving our configuration
// file, bringing up/shutting down processes, etc...
//
// This module will need to exist in whatever the parent process of our setup
// is, i.e. the process that can actually touch files and network. It will
// communicate with the GUI via a specialized FrondendConnector class.
export class IntifaceBackendManager extends EventEmitter {

  public static async Create(aConnector: BackendConnector, aUpdater: IApplicationUpdater):
    Promise<IntifaceBackendManager> {
    IntifaceBackendLogger.Logger.debug("Creating Backend Manager");
    const config = await IntifaceConfigurationFileManager.Create();
    const manager = new IntifaceBackendManager(aConnector, config, aUpdater);
    await manager.Initialize();
    return manager;
  }

  private _logger: winston.Logger;
  protected _connector: BackendConnector;
  private _process: ServerProcess | null = null;
  private _configManager: IntifaceConfigurationManager;
  private _applicationUpdater: IApplicationUpdater;
  private _ghManagers: Set<GithubReleaseManager> = new Set<GithubReleaseManager>();

  protected constructor(aConnector: BackendConnector,
    aConfig: IntifaceConfigurationFileManager,
    aApplicationUpdater: IApplicationUpdater) {
    super();
    this._logger = IntifaceBackendLogger.GetChildLogger("backend", this.constructor.name);
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
    await this.CheckForEngineExecutable();
    isOnline().then((aIsOnline: boolean) => {
      this._logger.debug(`Online check: ${aIsOnline}`);
      this._configManager.Config.IsOnline = aIsOnline;
    });
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
      if (!this._process?.GotProcessEnded) {
        this._logger.error("Did not receive process ended message, process most likely crashed.");
        this._connector.SendMessage(IntifaceProtocols.IntifaceBackendMessage.create({
          processError: IntifaceProtocols.IntifaceBackendMessage.ProcessError.create({ reason: "Process most likely crashed. Contact support." }),
        }));
      } else {
        this._logger.info("Normal process shutdown.");
      }
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

  private async UpdateEngine(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (!this._configManager.Config.IsOnline) {
      this._logger.debug("Uncertain of online status, not running engine update.");
      if (aMsg !== null) {
        this._connector.SendError(aMsg, "Online connection status uncertain, not running engine update.");
      }
    }
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    this._ghManagers.add(ghManager);
    try {
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
      this._configManager.Config.EngineUpdateAvailable = false;
      this.UpdateFrontendConfiguration();
      this._connector.SendOk(aMsg);
    } finally {
      this._ghManagers.delete(ghManager);
    }
  }

  private async UpdateDeviceFile(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (!this._configManager.Config.IsOnline) {
      this._logger.debug("Uncertain of online status, not running device file update.");
      if (aMsg !== null) {
        this._connector.SendError(aMsg, "Online connection status uncertain, not running device file update.");
      }
    }
    const ghManager = new GithubReleaseManager(this._configManager.Config);
    this._ghManagers.add(ghManager);
    try {
      ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
      await ghManager.DownloadLatestDeviceFileVersion();
      ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
      // Once we're done with a download, make sure to save our config and
      // update our frontend.
      this._configManager.Config.DeviceFileUpdateAvailable = false;
      await this._configManager!.Save();
      this.UpdateFrontendConfiguration();
      this._connector.SendOk(aMsg);
    } finally {
      this._ghManagers.delete(ghManager);
    }
  }

  private async UpdateApplication(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (!this._configManager.Config.IsOnline) {
      this._logger.debug("Uncertain of online status, not running application update.");
      if (aMsg !== null) {
        this._connector.SendError(aMsg, "Online connection status uncertain, not running application update.");
      }
    }
    try {
      this._applicationUpdater.addListener("progress", this.UpdateDownloadProgress.bind(this));
      await this._applicationUpdater.DownloadUpdate();
      this._configManager.Config.ApplicationUpdateAvailable = false;
      this._applicationUpdater.QuitAndInstall();
      this._connector.SendOk(aMsg);
    } finally {
      this._applicationUpdater.removeListener("progress", this.UpdateDownloadProgress.bind(this));
    }
  }

  private async CheckForUpdates(aMsg: IntifaceProtocols.IntifaceFrontendMessage | null) {
    if (!this._configManager.Config.IsOnline) {
      this._logger.debug("Uncertain of online status, not running update check.");
      if (aMsg !== null) {
        this._connector.SendError(aMsg, "Online connection status uncertain, not running update check.");
      }
    }
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
    this._ghManagers.add(ghManager);
    try {
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
    } finally {
      this._ghManagers.delete(ghManager);
    }
  }

  private async ResetIntifaceConfiguration() {
    rimraf(IntifaceBackendUtils.UserConfigDirectory, {}, (err) => {
      this._logger.warn("Config deleted, exiting applicaiton");
      if (err) {
        this._logger.warn(err);
      }
      this._logger.warn("Exiting now");
      this.emit("exit");
    });
  }

  private async CancelUpdate(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    for (const ghm of this._ghManagers) {
      ghm.CancelDownload();
    }
    if (this._applicationUpdater) {
      this._applicationUpdater.CancelUpdate();
    }
    this._connector.SendOk(aMsg);
  }

  private async InitializeUserDeviceConfig(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const exists = promisify(fs.exists);
    let jsonConfig;
    if (!await exists(IntifaceBackendUtils.UserDeviceConfigFilePath)) {
      jsonConfig = "{}";
    } else {  
      const readFile = promisify(fs.readFile);
      jsonConfig = await readFile(IntifaceBackendUtils.UserDeviceConfigFilePath, { flag: "r+", encoding: "utf-8" });
    }
    let msg = IntifaceProtocols.IntifaceBackendMessage.create({
      initializeUserDeviceConfig: IntifaceProtocols.IntifaceBackendMessage.InitializeUserDeviceConfig.create({ jsonDeviceConfig: jsonConfig }),
    });
    msg.index = aMsg.index;
    this._connector.SendMessage(msg);
}

  private async UpdateUserDeviceConfig(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const jsonConfig: string = aMsg.updateUserDeviceConfig!.jsonDeviceConfig!;
    if (jsonConfig.length === 0) {
      const deleteFile = promisify(fs.unlink);
      await deleteFile(IntifaceBackendUtils.UserDeviceConfigFilePath);
      this._connector.SendOk(aMsg);
    } else {
      const writeFile = promisify(fs.writeFile);
      await writeFile(IntifaceBackendUtils.UserDeviceConfigFilePath, jsonConfig, { flag: "w+", encoding: "utf-8" });
    }
    this._connector.SendOk(aMsg);
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

    if (aMsg.checkForUpdates !== null) {
      await this.CheckForUpdates(aMsg);
      return;
    }

    if (aMsg.cancelUpdate !== null) {
      await this.CancelUpdate(aMsg);
      return;
    }

    if (aMsg.resetIntifaceConfiguration !== null) {
      await this.ResetIntifaceConfiguration();
      return;
    }

    if (aMsg.requestUserDeviceConfig !== null) {
      await this.InitializeUserDeviceConfig(aMsg);
      return;
    }

    if (aMsg.updateUserDeviceConfig !== null) {
      await this.UpdateUserDeviceConfig(aMsg);
      return;
    }

    this._logger.warn(`Message not recognized by Backend Manager! ${JSON.stringify(aMsg)}`);
  }
}
