import {
  BrowserWindow
} from "electron";
import {
  ButtplugProcessServer
} from "intiface-process-server";
import {
  ElectronServerConnector
} from "./ElectronServerConnector";

let intiface_server: ButtplugProcessServer;

export function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  intiface_server = new ButtplugProcessServer(new ElectronServerConnector(aWin));
}
