import { IApplicationUpdater, IntifaceBackendLogger } from "intiface-core-library";
import { autoUpdater, CancellationToken } from "electron-updater";
import { EventEmitter } from "events";

export class ElectronApplicationUpdater extends EventEmitter implements IApplicationUpdater {

  private _updateAvailable: boolean = false;
  private _cancellationToken: CancellationToken | null = null;

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
      if (progressObj.transferred === progressObj.total) {
        this._cancellationToken = null;
      }
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
    this._cancellationToken = new CancellationToken();
    await autoUpdater.downloadUpdate(this._cancellationToken);
  }

  public QuitAndInstall(): void {
    autoUpdater.quitAndInstall();
  }

  public CancelUpdate(): void {
    if (this._cancellationToken) {
      this._cancellationToken.cancel();
    }
  }
}
