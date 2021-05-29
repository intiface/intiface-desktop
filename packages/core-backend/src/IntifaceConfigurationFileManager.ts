import { IntifaceConfigurationManager, IntifaceUtils } from "intiface-core-library";
import { IntifaceBackendUtils } from "./Utils";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

export class IntifaceConfigurationFileManager extends IntifaceConfigurationManager {

  public static DEFAULT_CONFIG_FILE_NAME = "intiface.config.json";
  public static DEFAULT_CONFIG_FILE_PATH = path.join(IntifaceBackendUtils.UserConfigDirectory,
                                                     IntifaceConfigurationFileManager.DEFAULT_CONFIG_FILE_NAME);

  public static async Create(aConfigPath: string = IntifaceConfigurationFileManager.DEFAULT_CONFIG_FILE_PATH)
  : Promise<IntifaceConfigurationFileManager> {
    const mgr = new IntifaceConfigurationFileManager(aConfigPath);

    const exists = promisify(fs.exists);
    const mkdir = promisify(fs.mkdir);
    const access = promisify(fs.access);

    if (!(await exists(IntifaceBackendUtils.UserConfigDirectory))) {
      await mkdir(IntifaceBackendUtils.UserConfigDirectory);
    }
    // If we don't have a configuration file yet, make one now.
    if (!await exists(aConfigPath)) {
      await mgr.Save();
    } else {
      // If we have a file already, but can't read/write, just throw.
      await access(aConfigPath, fs.constants.R_OK | fs.constants.W_OK);
      await mgr.Load();
    }

    return mgr;
  }

  private _configPath: string;

  protected constructor(aConfigPath: string) {
    super();
    this._configPath = aConfigPath;
  }

  public get Config() {
    return this._config;
  }

  public async Load() {
    const readFile = promisify(fs.readFile);
    const configStr = await readFile(this._configPath, { encoding: "utf-8" });
    this._config.Load(JSON.parse(configStr));
  }

  public async Save() {
    const writeFile = promisify(fs.writeFile);
    await writeFile(this._configPath, JSON.stringify(this._config), { flag: "w+", encoding: "utf-8" });
  }
}
