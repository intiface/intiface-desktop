import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfiguration } from "./IntifaceConfiguration";

// Sends messages from the frontend/GUI to the backend/server process.
export abstract class FrontendConnector extends EventEmitter {

  private _config: IntifaceConfiguration = new IntifaceConfiguration();

  protected constructor() {
    super();
  }

  protected EmitServerMessage(aMsg: IntifaceProtocols.ServerProcessMessage) {
    this.emit("backendmessage", aMsg);
  }

  public get Config() {
    return this._config;
  }

  public abstract SendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage): void;

  protected ProcessMessage(aMsg: IntifaceProtocols.ServerProcessMessage) {
    if (aMsg.configuration !== null) {
      // If we've gotten a configuration message from the backend, that means
      // the config file was loaded and we need to overwrite our current state
      // with that.
      this._config.Load(aMsg.configuration!.configuration!);
    }
  }
}
