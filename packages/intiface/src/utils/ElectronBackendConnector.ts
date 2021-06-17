import { BackendConnector, IntifaceBackendUtils } from "intiface-core-backend-library";
import { BrowserWindow, ipcMain, shell } from "electron";
import { IntifaceProtocols } from "intiface-protocols";
import * as path from "path";

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
      let msg = IntifaceProtocols.IntifaceFrontendMessage.decode(arg);
      if (msg.openLogDirectory !== null) {
        shell.showItemInFolder(path.join(IntifaceBackendUtils.UserConfigDirectory, "intifacelog.txt"));
        return;
      }
  
      this.ProcessMessage(msg);
    });
  }

  public SendMessageInternal(aMsg: Buffer) {
    this._win.webContents.send("backend", aMsg);
  }
}
