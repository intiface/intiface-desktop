import { BrowserWindow } from "electron";
import { ButtplugProcessManager } from "intiface-core-library";
import { ElectronBackendConnector } from "./ElectronBackendConnector";

let _intifaceServer: ButtplugProcessManager;

export function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  _intifaceServer = new ButtplugProcessManager(new ElectronBackendConnector(aWin));
}
