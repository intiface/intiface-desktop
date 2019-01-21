import { EventEmitter } from "events";
import * as MessageTypes from "intiface-protocols";

// Responsible for linking the frontend and server. Will have at least 2 flavors
// to start, Websocket and Electron IPC.
export abstract class ServerFrontendConnector extends EventEmitter {
  abstract Start(): void;
  abstract SendMessageToFrontend(aMsg: MessageTypes.ServerProcessMessage): void;

  // When we get something from the frontend, emit it so the server can do
  // something with it.
  protected ReceiveMessageFromFrontend(aMsg: MessageTypes.ServerFrontendMessage) {
    this.emit("message", aMsg);
  }
};
