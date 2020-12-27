import { app, BrowserWindow } from "electron";
import { IntifaceBackendManager, IntifaceBackendLogger } from "intiface-core-library";
import { ElectronBackendConnector } from "./ElectronBackendConnector";
import { ElectronApplicationUpdater } from "./ElectronApplicationUpdater";

let _backendManager: IntifaceBackendManager;

export async function SetupElectronIntifaceServer(aWin: BrowserWindow) {
  IntifaceBackendLogger.GetChildLogger("backend", "ElectronIntifaceInitializer").debug("Bringing up Electron Intiface Backend.");
  _backendManager = await IntifaceBackendManager.Create(new ElectronBackendConnector(aWin),
                                                        new ElectronApplicationUpdater());
  _backendManager.addListener("exit", () => {
    app.quit();
  });
}

export async function ShutdownElectronIntifaceServer() {
  IntifaceBackendLogger.GetChildLogger("backend", "ElectronIntifaceInitializer").debug("Window closed, shutting down.");
  await _backendManager.Shutdown();
}
