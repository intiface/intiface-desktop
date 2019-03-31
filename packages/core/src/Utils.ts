import * as os from "os";
import * as path from "path";

export class IntifaceUtils {
  public static get UserConfigDirectory(): string {
    const home = os.homedir();
    if (process.platform === "win32") {
      return path.join(process.env.LOCALAPPDATA || path.join(home, "AppData", "Local"), "Intiface");
    } else if (process.platform === "darwin") {
      return path.join(home, "Library", "Application Support", "Intiface");
    } else {
      return process.env.XDG_CONFIG_HOME || path.join(home, ".config", "Intiface");
    }
  }

  public static MakePromise(): [Promise<void>, () => void, (err: Error) => void] {
    let res;
    let rej;
    const p = new Promise<void>((r, e) => { res = r; rej = e; });
    return [p, res, rej];
  }

  public static Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
