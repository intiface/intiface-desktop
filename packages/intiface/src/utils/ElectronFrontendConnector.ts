import { FrontendConnector } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";
import { ipcRenderer } from "electron";

// The frontend side of the Frontend/Server connector pair for Electron. This
// handles anything on the DOM end of Electron, including relaying messages to
// update the UI.
export class ElectronFrontendConnector extends FrontendConnector {

  public static Create(): ElectronFrontendConnector {
    const connector = new ElectronFrontendConnector();
    connector.Ready();
    return connector;
  }

  protected constructor() {
    super();
    ipcRenderer.addListener("backend", (event: string, args: Buffer) => {
      const msg = IntifaceProtocols.IntifaceBackendMessage.decode(args);
      this.ProcessMessage(msg);
    });
  }

  protected SendMessageInternal(aMsg: Buffer) {
    ipcRenderer.send("frontend", aMsg);
  }
}
