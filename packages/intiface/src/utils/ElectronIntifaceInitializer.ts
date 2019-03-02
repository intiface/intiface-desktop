import { BrowserWindow } from "electron";
import { ButtplugProcessManager } from "intiface-core-library";
import { ElectronServerConnector } from "./ElectronServerConnector";

let _intifaceServer: ButtplugProcessManager;

export function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  _intifaceServer = new ButtplugProcessManager(new ElectronServerConnector(aWin));
}
