import { EventEmitter } from "events";
import { ServerFrontendMessage, ServerProcessMessage } from "intiface-protocols";

export abstract class FrontendConnector extends EventEmitter {

  protected constructor() {
    super();
  }

  protected EmitServerMessage() {
    //this.emit("server", )
  }

  public abstract SendMessage(aMsg: ServerFrontendMessage): void;
}
