import { BackendConnector } from "intiface-core-backend-library";
import { BrowserWindow, ipcMain } from "electron";
import { IntifaceProtocols } from "intiface-protocols";

// The Main/Parent process side of the Frontend/Server connector pair for
// Electron. This is the class that will handle anything that needs to happen on
// the system side of things, including file loading/saving, network access,
// etc.
export class ElectronBackendConnector extends BackendConnector {
  private _win: BrowserWindow;

  public constructor(aWin: BrowserWindow) {
    super();
    this._win = aWin;
    ipcMain.addListener("frontend", (event: string, arg: Buffer) => {
      this.ProcessMessage(IntifaceProtocols.IntifaceFrontendMessage.decode(arg));
    });
  }

  public SendMessageInternal(aMsg: Buffer) {
    this._win.webContents.send("backend", aMsg);
  }
}
