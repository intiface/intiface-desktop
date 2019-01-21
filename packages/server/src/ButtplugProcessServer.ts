import { ServerFrontendConnector } from "./ServerFrontendConnector";
import * as MessageTypes from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";

export class ButtplugProcessServer {
  private _connector: ServerFrontendConnector;
  private _process: ServerProcess | null;

  public constructor(aConnector: ServerFrontendConnector) {
    this._connector = aConnector;
    this._connector.addListener("message", (msg) => this.ReceiveFrontendMessage(msg));
  }

  private ReceiveFrontendMessage(aMsg: MessageTypes.ServerFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.hasStartprocess) {
      this._process = new ServerProcess();
      // Process message just hands the raw Protobuf buffer through so we don't
      // have to reencode it.
      this._process.addListener("processmessage", (aMsg: Buffer) => {
        this._connector.SendMessageToFrontend(aMsg);
      });
      this._process.RunServer();
    } else if (aMsg.hasStopprocess) {
    } else if (aMsg.hasStartproxy) {
    } else if (aMsg.hasStopproxy) {
    } else if (aMsg.hasUpdateconfig) {
    }
  }
}
