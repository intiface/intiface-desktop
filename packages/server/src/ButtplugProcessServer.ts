import { ServerFrontendConnector } from "./ServerFrontendConnector";

export class ButtplugProcessServer {
  private _connector: ServerFrontendConnector;

  public constructor(aConnector: ServerFrontendConnector) {
    this._connector = aConnector;
    this._connector.addListener("message", this.ReceiveFrontendMessage);
  }

  private ReceiveFrontendMessage(aMsg: FrontendMessage) {
    switch (aMsg.constructor) {
      case StartProcessMessage:
        break;
      case StopProcessMessage:
        break;
      case UpdateConfigMessage:
        break;
      case StartProxyMessage:
        break;
      case StopProxyMessage:
        break;
    }
  }
}
