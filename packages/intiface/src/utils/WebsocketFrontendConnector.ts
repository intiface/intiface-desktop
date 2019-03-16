import { FrontendConnector } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";

export class WebsocketFrontendConnector extends FrontendConnector {

  public constructor() {
    super();
  }

  protected SendMessageInternal(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    // TODO Implement once we have an express server
  }
}
