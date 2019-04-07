import * as winston from "winston";
import * as Transport from "winston-transport";
import { IntifaceLogger } from "./IntifaceLogger";
import { FrontendConnector } from "./FrontendConnector";

class IntifaceFrontendLoggerTransport extends Transport {
  private _connector: FrontendConnector;

  public constructor(aConnector: FrontendConnector, aOptions: Transport.TransportStreamOptions | undefined) {
    super(aOptions);
    this._connector = aConnector;
  }

  public log(info: any, callback: () => void) {
    // If this is a frontend message, relay to the backend.
    if (info.hasOwnProperty("logType") && info.logType === "frontend") {
      this._connector.LogMessage(JSON.stringify(info));
    }
    callback();
  }
}

class IntifaceFrontendLogStorageTransport extends Transport {
  private _logStore: any[] = [];
  // Maximum number of messages to store. All messages are written to the log
  // file.
  private _storeLimit: number = 10000;

  public constructor(aOptions: Transport.TransportStreamOptions) {
    super(aOptions);
  }

  public log(info: any, callback: () => void) {
    this._logStore.push(info);
    while (this._logStore.length > this._storeLimit) {
      this._logStore.shift();
    }
    callback();
  }

  public get Logs() {
    return this._logStore;
  }
}

// The Frontend Logger is not actually a logger. It's basically just a shell to
// shuttle messages to the BackendLogger, which actually stores the log messages.
export class IntifaceFrontendLogger extends IntifaceLogger {

  public static AddConnectorTransport(aConnector: FrontendConnector) {
    IntifaceFrontendLogger.Logger.add(new IntifaceFrontendLoggerTransport(aConnector, {}));
  }

  public static get Logger(): winston.Logger {
    if (IntifaceFrontendLogger._logInstance === undefined) {
      IntifaceFrontendLogger._logInstance = new IntifaceFrontendLogger();
    }
    return IntifaceFrontendLogger._logInstance._logger;
  }

  public static GetChildLogger(aLocation: string): winston.Logger {
    return IntifaceFrontendLogger.Logger.child({ location: aLocation });
  }

  public static get LogStore() {
    if (IntifaceFrontendLogger._logStore === undefined) {
      throw new Error("Must call create before acessing Frontend Log Store");
    }
    return this._logStore;
  }

  protected static _logInstance: IntifaceFrontendLogger;
  protected static _logStore: IntifaceFrontendLogStorageTransport;
  protected _logger: winston.Logger;

  protected constructor() {
    super("frontend", "General");
    if (IntifaceFrontendLogger._logStore === undefined) {
      IntifaceFrontendLogger._logStore = new IntifaceFrontendLogStorageTransport({});
    }
    this._logger.add(IntifaceFrontendLogger._logStore);
  }
}
