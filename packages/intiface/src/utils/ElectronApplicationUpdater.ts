import { IApplicationUpdater } from "intiface-core-library";
import { autoUpdater } from "electron-updater";
import * as log from "electron-log";

export class ElectronApplicationUpdater implements IApplicationUpdater {

  private _updateAvailable: boolean = false;

  public constructor() {
    // Once the app is up, bring up the autoupdater
    log.transports.file.level = "debug";
    autoUpdater.logger = log;
    autoUpdater.autoDownload = false;
    autoUpdater.autoInstallOnAppQuit = true;
    autoUpdater.addListener("update-not-available", () => {
      this._updateAvailable = false;
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
