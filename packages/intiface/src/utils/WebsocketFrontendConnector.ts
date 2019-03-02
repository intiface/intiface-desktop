import { FrontendConnector } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";

export class WebsocketFrontendConnector extends FrontendConnector {

  public constructor() {
    super();
  }

  public SendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
  }
}
