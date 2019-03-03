import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";

// Sends message from the backend (which handles file IO, network, etc...) to
// the frontend/GUI.
export abstract class BackendConnector extends EventEmitter {

  protected constructor() {
    super();
  }

  public SendMessage(aMsg: IntifaceProtocols.ServerBackendMessage) {
    this.SendMessageInternal(Buffer.from(IntifaceProtocols.ServerBackendMessage.encode(aMsg).finish()));
  }

  protected abstract SendMessageInternal(aMsg: Buffer): void;

  // When we get something from the frontend, emit it so the server can do
  // something with it.
  protected ProcessMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    this.emit("message", aMsg);
  }
}
