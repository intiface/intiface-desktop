import { BrowserWindow } from "electron";
import { ButtplugProcessServer } from "intiface-core-library";
import { ElectronServerConnector } from "./ElectronServerConnector";

let _intifaceServer: ButtplugProcessServer;

export function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  _intifaceServer = new ButtplugProcessServer(new ElectronServerConnector(aWin));
}
