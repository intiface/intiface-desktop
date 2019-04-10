import { IApplicationUpdater, IntifaceBackendLogger } from "intiface-core-library";
import { autoUpdater } from "electron-updater";
import { EventEmitter } from "events";

export class ElectronApplicationUpdater extends EventEmitter implements IApplicationUpdater {

  private _updateAvailable: boolean = false;

  public constructor() {
    super();
    // Once the app is up, bring up the autoupdater
    autoUpdater.logger = IntifaceBackendLogger.Logger;
    autoUpdater.autoDownload = false;
    autoUpdater.autoInstallOnAppQuit = true;
    autoUpdater.addListener("update-not-available", () => {
      this._updateAvailable = false;
    });
    autoUpdater.addListener("download-progress", (progressObj) => {
      this.emit("progress", {
        receivedBytes: progressObj.transferred,
        totalBytes: progressObj.total,
      });
    });
  }

  public async CheckForUpdate(): Promise<boolean> {
    this._updateAvailable = true;
    // If no update available, this will fire the update-not-available event and
    // send back false.
    const status = await autoUpdater.checkForUpdates();
    return this._updateAvailable;
  }

  public async DownloadUpdate(): Promise<void> {
    await autoUpdater.downloadUpdate();
  }

  public QuitAndInstall(): void {
    autoUpdater.quitAndInstall();
  }
}
