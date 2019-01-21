import { ServerFrontendConnector } from "./ServerFrontendConnector";
import * as MessageTypes from "intiface-protocols";

export class ButtplugProcessServer {
  private _connector: ServerFrontendConnector;

  public constructor(aConnector: ServerFrontendConnector) {
    this._connector = aConnector;
    this._connector.addListener("message", this.ReceiveFrontendMessage);
  }

  private ReceiveFrontendMessage(aMsg: MessageTypes.ServerFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.hasStartprocess) {
    } else if (aMsg.hasStopprocess) {
    } else if (aMsg.hasStartproxy) {
    } else if (aMsg.hasStopproxy) {
    } else if (aMsg.hasUpdateconfig) {
    }
  }
}
