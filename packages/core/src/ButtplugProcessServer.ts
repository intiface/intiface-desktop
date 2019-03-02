import { ServerConnector } from "./ServerConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";

export class ButtplugProcessServer {
  private _connector: ServerConnector;
  private _process: ServerProcess | null;

  public constructor(aConnector: ServerConnector) {
    this._connector = aConnector;
    this._connector.addListener("message", (msg) => this.ReceiveFrontendMessage(msg));
  }

  private ReceiveFrontendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startprocess !== null) {
      this._process = new ServerProcess();
      // Process message just hands the raw Protobuf buffer through so we don't
      // have to reencode it.
      this._process.addListener("processmessage", (aMsg: Buffer) => {
        this._connector.SendMessageToFrontend(aMsg);
      });
      this._process.RunServer();
    } else if (aMsg.stopprocess !== null) {
    } else if (aMsg.startproxy !== null) {
    } else if (aMsg.stopproxy !== null) {
    } else if (aMsg.updateconfig !== null) {
    }
  }
}
