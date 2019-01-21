import {
  BrowserWindow
} from "electron";
import {
  ButtplugProcessServer
} from 'intiface-process-server';
import {
  ElectronConnector
} from './ElectronConnector';

let intiface_server: ButtplugProcessServer;

export function SetupElectronIntiface(aWin: BrowserWindow) {
  intiface_server = new ButtplugProcessServer(new ElectronConnector(aWin));
}
