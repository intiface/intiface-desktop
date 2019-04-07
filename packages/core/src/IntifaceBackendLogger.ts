import { IntifaceLogger } from "./IntifaceLogger";
import { IntifaceUtils } from "./Utils";
import { BackendConnector } from "./BackendConnector";
import * as path from "path";
import * as winston from "winston";
import * as Transport from "winston-transport";

export class IntifaceBackendLoggerTransport extends Transport {
  private _connector: BackendConnector;

  public constructor(aConnector: BackendConnector, aOptions: Transport.TransportStreamOptions | undefined) {
    super(aOptions);
    this._connector = aConnector;
  }

  public log(info: any, callback: () => void) {
    // If this is NOT a frontend message, then send it to the frontend.
    // Otherwise we'll have an infinite logging loop.
    if (info.hasOwnProperty("logType") && info.logType !== "frontend") {
      this._connector.LogMessage(JSON.stringify(info));
    }
    callback();
  }
}

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
