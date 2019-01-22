import { FrontendConnector } from "./FrontendConnector";
import { ServerFrontendMessage, ServerProcessMessage } from "intiface-protocols";

export class WebsocketFrontendConnector extends FrontendConnector {

  public constructor() {
    super();
  }

  public SendMessage(aMsg: ServerFrontendMessage) {
  }
}
