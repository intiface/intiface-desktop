import * as os from "os";
import * as path from "path";

export class IntifaceBackendUtils {
  public static USER_DEVICE_CONFIG_FILENAME = "buttplug-user-device-config.json";
  public static DEVICE_CONFIG_FILENAME = "buttplug-device-config.json";
  public static INTIFACE_CONFIG_DIRECTORY_NAME = "IntifaceDesktop";

  public static get UserConfigDirectory(): string {
    const home = os.homedir();
    if (process.platform === "win32") {
      return path.join(process.env.LOCALAPPDATA || path.join(home, "AppData", "Local"), IntifaceBackendUtils.INTIFACE_CONFIG_DIRECTORY_NAME);
    } else if (process.platform === "darwin") {
      return path.join(home, "Library", "Application Support", IntifaceBackendUtils.INTIFACE_CONFIG_DIRECTORY_NAME);
    } else {
      return process.env.XDG_CONFIG_HOME || path.join(home, ".config", IntifaceBackendUtils.INTIFACE_CONFIG_DIRECTORY_NAME);
    }
  }

  public static get DeviceConfigFilePath(): string {
    return path.join(IntifaceBackendUtils.UserConfigDirectory, IntifaceBackendUtils.DEVICE_CONFIG_FILENAME);
  }

  public static get UserDeviceConfigFilePath(): string {
    return path.join(IntifaceBackendUtils.UserConfigDirectory, IntifaceBackendUtils.USER_DEVICE_CONFIG_FILENAME);
  }
}
