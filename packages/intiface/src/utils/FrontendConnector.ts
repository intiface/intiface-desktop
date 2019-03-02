import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfiguration } from "./IntifaceConfiguration";

export abstract class FrontendConnector extends EventEmitter {

  private _config: IntifaceConfiguration = new IntifaceConfiguration();

  protected constructor() {
    super();
  }

  protected EmitServerMessage() {
    //this.emit("server", )
  }

  public get Config() {
    return this._config;
  }

  public abstract SendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage): void;

  protected ProcessMessage(aMsg: Buffer) {
    
  }
}
