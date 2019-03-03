import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

export class IntifaceConfigurationFileManager extends IntifaceConfigurationManager {

  // This is definitely going to need to be something different for windows.
  public static DEFAULT_CONFIG_PATH = path.join(os.homedir(), ".buttplugrc");

  private _configPath: string;

  public constructor(aConfigPath: string = IntifaceConfigurationFileManager.DEFAULT_CONFIG_PATH) {
    super();
    this._configPath = aConfigPath;
    // If we don't have a configuration file yet, make one now.
    if (!fs.existsSync(this._configPath)) {
      this.Save();
    } else {
      // If we have a file already, but can't read/write, just throw.
      fs.accessSync(this._configPath, fs.constants.R_OK | fs.constants.W_OK);
    }
  }

  public get Config() {
    return this._config;
  }

  public Load() {
    const configStr = fs.readFileSync(this._configPath, { encoding: "utf-8" });
    this._config.Load(JSON.parse(configStr));
  }

  public Save() {
    fs.writeFileSync(this._configPath, JSON.stringify(this._config), { flag: "w+", encoding: "utf-8" });
  }
}
