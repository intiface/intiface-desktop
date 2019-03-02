import { FrontendConnector } from "./FrontendConnector";
import { ServerFrontendMessage, ServerProcessMessage } from "intiface-protocols";
import { ipcRenderer } from "electron";

// The frontend side of the Frontend/Server connector pair for Electron. This
// handles anything on the DOM end of Electron, including relaying messages to
// update the UI.
export class ElectronFrontendConnector extends FrontendConnector {

  public constructor() {
    super();
    ipcRenderer.addListener("process", (event: string, args: Buffer) => {
      console.log(ServerProcessMessage.deserializeBinary(args).toObject());
    });
  }

  public SendMessage(aMsg: ServerFrontendMessage) {
    ipcRenderer.send("frontend", aMsg.serializeBinary());
  }
}
