import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";

export class IntifaceConfigurationEventManager extends IntifaceConfigurationManager {

  // When this object is created, we'll usually be getting a config file loaded
  // from the operating system. Just pass the loaded file to the constructor and
  // consider that our starting point.
  public constructor(aConfigObj: object) {
    super();
    this._config.Load(aConfigObj);
    // Any time a setter runs successfully, save.
    this._config.addListener("update", () => {
      this.Save();
    });
  }

  public get Config() {
    return this._config;
  }

  public Load() {
    // We should never run another load after our construction.
    throw new Error("Shouldn't load in an Configuration Event Manager!");
  }

  public Save() {
    // Any time a save is requested, emit the whole config file so it can be
    // sent wherever it needs to get to the parent process.
    this.emit("configsaved", JSON.stringify(this._config));
  }
}
