import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { EventEmitter } from "events";

export abstract class IntifaceConfigurationManager extends EventEmitter {
  protected _config: IntifaceConfiguration = new IntifaceConfiguration();

  public get Config() {
    return this._config;
  }

  public abstract Load();

  public abstract Save();
}
