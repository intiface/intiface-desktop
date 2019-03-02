import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";

// Sends message from the backend (which handles file IO, network, etc...) to
// the frontend/GUI.
export abstract class BackendConnector extends EventEmitter {

  protected constructor() {
    super();
  }

  // Establishes a connection, if required.
  public abstract Start(): void;

  public SendMessage(aMsg: IntifaceProtocols.ServerProcessMessage) {
    this.SendMessageToFrontend(Buffer.from(IntifaceProtocols.ServerProcessMessage.encode(aMsg).finish()));
  }

  protected abstract SendMessageToFrontend(aMsg: Buffer): void;

  // When we get something from the frontend, emit it so the server can do
  // something with it.
  protected ReceiveMessageFromFrontend(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    this.emit("message", aMsg);
  }
}
