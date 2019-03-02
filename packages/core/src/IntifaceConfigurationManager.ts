import { IntifaceConfiguration } from "./IntifaceConfiguration";
import * as fs from "fs";

export class IntifaceConfigurationManager {
  private _config: IntifaceConfiguration = new IntifaceConfiguration();

  public get Config() {
    return this._config;
  }

  public Load(aConfigPath: string) {
  }

  public Save(aConfigPath: string) {
    fs.writeFileSync(aConfigPath, JSON.stringify(this._config));
  }
}
