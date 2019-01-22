import { FrontendConnector } from "./FrontendConnector";
import { ServerFrontendMessage, ServerProcessMessage } from "intiface-protocols";
import { ipcRenderer } from "electron";

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
