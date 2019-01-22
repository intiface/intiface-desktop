import { EventEmitter } from "events";
import * as MessageTypes from "intiface-protocols";

// Responsible for the server communicating with the frontend, in the server
// process/scope. Will have at least 2 flavors to start, Websocket and Electron
// IPC.
export abstract class ServerConnector extends EventEmitter {
  abstract Start(): void;
  // This will get a serialized protobuf, so just take a buffer and pass it on.
  // We'll decode in the frontend.
  abstract SendMessageToFrontend(aMsg: Buffer): void;

  // When we get something from the frontend, emit it so the server can do
  // something with it.
  protected ReceiveMessageFromFrontend(aMsg: MessageTypes.ServerFrontendMessage) {
    this.emit("message", aMsg);
  }
};
