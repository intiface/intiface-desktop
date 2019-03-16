import { BrowserWindow } from "electron";
import { ButtplugProcessManager } from "intiface-core-library";
import { ElectronBackendConnector } from "./ElectronBackendConnector";

let _intifaceServer: ButtplugProcessManager;

export async function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  _intifaceServer = await ButtplugProcessManager.Create(new ElectronBackendConnector(aWin));
}

export async function ShutdownElectronIntifaceServer() {
  await _intifaceServer.Shutdown();
}
