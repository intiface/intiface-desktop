import * as os from "os";
import * as path from "path";

export class IntifaceUtils {
  public static DEVICE_CONFIG_FILENAME = "buttplug-device-config.json";
  public static INTIFACE_CONFIG_DIRECTORY_NAME = "IntifaceDesktop";

  public static get UserConfigDirectory(): string {
    const home = os.homedir();
    if (process.platform === "win32") {
      return path.join(process.env.LOCALAPPDATA || path.join(home, "AppData", "Local"), IntifaceUtils.INTIFACE_CONFIG_DIRECTORY_NAME);
    } else if (process.platform === "darwin") {
      return path.join(home, "Library", "Application Support", IntifaceUtils.INTIFACE_CONFIG_DIRECTORY_NAME);
    } else {
      return process.env.XDG_CONFIG_HOME || path.join(home, ".config", IntifaceUtils.INTIFACE_CONFIG_DIRECTORY_NAME);
    }
  }

  public static get DeviceConfigFilePath(): string {
    return path.join(IntifaceUtils.UserConfigDirectory, IntifaceUtils.DEVICE_CONFIG_FILENAME);
  }

  public static MakePromise<T>(): [Promise<T>, () => T, (err: Error) => void] {
    let res;
    let rej;
    const p = new Promise<T>((r, e) => { res = r; rej = e; });
    return [p, res, rej];
  }

  public static Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
