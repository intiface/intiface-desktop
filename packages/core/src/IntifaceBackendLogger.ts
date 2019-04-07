import { IntifaceLogger } from "./IntifaceLogger";
import { IntifaceUtils } from "./Utils";
import { BackendConnector } from "./BackendConnector";
import * as path from "path";
import * as winston from "winston";
import { IntifaceBackendLoggerTransport } from "./IntifaceBackendLoggerTransport";

export class IntifaceBackendLogger extends IntifaceLogger {
  public static AddConnectorTransport(aConnector: BackendConnector) {
    IntifaceBackendLogger.Logger.add(new IntifaceBackendLoggerTransport(aConnector, {}));
  }

  public static GetChildLogger(aLocation: string): winston.Logger {
    const logger = IntifaceBackendLogger.Logger;
    return logger.child({ location: aLocation });
  }

  public static get Logger(): winston.Logger {
    if (IntifaceBackendLogger._logInstance === undefined) {
      IntifaceBackendLogger._logInstance = new IntifaceBackendLogger();
    }
    return IntifaceBackendLogger._logInstance._logger;
  }

  protected static _logInstance: IntifaceBackendLogger;
  protected _logger: winston.Logger;

  protected constructor() {
    super("backend", "General");
    this._logger.add(
      new winston.transports.File({
        filename: path.join(IntifaceUtils.UserConfigDirectory, "intifacelog.txt"),
        options: {flags: "w+"},
        level: "debug",
      }));
    this._logger.add(new winston.transports.Console({ level: "debug" }));
  }
}
