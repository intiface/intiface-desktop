import { FrontendConnector } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";

// The frontend side of the Frontend/Server connector pair for Electron. This
// handles anything on the DOM end of Electron, including relaying messages to
// update the UI.
export class ElectronFrontendConnector extends FrontendConnector {

  public static async Create(): Promise<ElectronFrontendConnector> {
    const connector = new ElectronFrontendConnector();
    await connector.Ready();
    return connector;
  }

  protected constructor() {
    super();
    // Here and below, cast window to any, as we're using the contextBridge to
    // have electron attach the api to window for us, so it won't show up easily
    // in prototypes and I don't want to fuck with adding it to the typescript
    // types.
    (window as any).api.receive("backend", (args: Uint8Array) => {
      const msg = IntifaceProtocols.IntifaceBackendMessage.decode(args);
      this.ProcessMessage(msg);
    });
  }

  protected SendMessageInternal(aMsg: Buffer) {
    (window as any).api.send("frontend", aMsg);
  }
}
