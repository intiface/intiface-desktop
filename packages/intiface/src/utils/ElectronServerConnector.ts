import { ServerConnector } from "intiface-process-server";
import { IpcMain, IpcRenderer, BrowserWindow, ipcMain } from "electron";
import { ServerFrontendMessage, ServerProcessMessage } from "intiface-protocols";

// The Main/Parent process side of the Frontend/Server connector pair for
// Electron. This is the class that will handle anything that needs to happen on
// the system side of things, including file loading/saving, network access,
// etc.
export class ElectronServerConnector extends ServerConnector
{
  private _win: BrowserWindow;

  public constructor(aWin: BrowserWindow)
  {
    super();
    this._win = aWin;
    ipcMain.addListener('frontend', (event: string, arg: Buffer) => {
      this.emit("message", ServerFrontendMessage.deserializeBinary(arg));
    });
  }

  public Start() {
    // Nothing to actually start here.
  }

  public SendMessageToFrontend(aMsg: Buffer) {
    this._win.webContents.send("process", aMsg);
  }
}
