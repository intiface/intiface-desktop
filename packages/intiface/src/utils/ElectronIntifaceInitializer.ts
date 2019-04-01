import { BrowserWindow } from "electron";
import { IntifaceBackendManager } from "intiface-core-library";
import { ElectronBackendConnector } from "./ElectronBackendConnector";

let _backendManager: IntifaceBackendManager;

export async function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  _backendManager = await IntifaceBackendManager.Create(new ElectronBackendConnector(aWin));
}

export async function ShutdownElectronIntifaceServer() {
  await _backendManager.Shutdown();
}
