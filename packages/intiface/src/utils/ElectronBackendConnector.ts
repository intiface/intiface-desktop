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
      if (msg.requestSerialPortList !== null) {
        let result: any; 
        let reject: any;
        let wait_promise = new Promise((res, rej) => {
          result = res;
          reject = rej;
        });

        let serial_port_handler = (event: any, portList: any, webContents: any, callback: any) => {
          event.preventDefault();
          callback('');
          result(portList);
        };

        this._win.webContents.session.addListener('select-serial-port', serial_port_handler);

        this._win.webContents.executeJavaScript(
          `navigator.serial.requestPort().then(port => port.toString()).catch(err => err.toString());`, true);
        wait_promise.then((portList) => {
          this._win.webContents.session.removeListener('select-serial-port', serial_port_handler);
          const listMsg = IntifaceProtocols.IntifaceBackendMessage.create({
            serialPortList: IntifaceProtocols.IntifaceBackendMessage.SerialPortList.create({
              ports: (portList as any).map((x: any) => x.portName),
              names: (portList as any).map((x: any) => x.displayName),
            }),
          });
          listMsg.index = msg.index;
          super.SendMessage(listMsg);                    
        });
        return;
      }
  
      this.ProcessMessage(msg);
    });
  }

  public SendMessageInternal(aMsg: Buffer) {
    this._win.webContents.send("backend", aMsg);
  }
}
