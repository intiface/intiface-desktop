import * as winston from "winston";
import * as Transport from "winston-transport";
import { IntifaceLogger } from "./IntifaceLogger";
import { FrontendConnector } from "./FrontendConnector";
import { IntifaceFrontendLoggerTransport } from "./IntifaceFrontendLoggerTransport";
import { IntifaceFrontendLogStorageTransport } from "./IntifaceFrontendLogStorageTransport";

// The Frontend Logger is not actually a logger. It's basically just a shell to
// shuttle messages to the BackendLogger, which actually stores the log messages.
export class IntifaceFrontendLogger extends IntifaceLogger {

  public static AddConnectorTransport(aConnector: FrontendConnector) {
    IntifaceFrontendLogger.Logger.add(new IntifaceFrontendLoggerTransport(aConnector, {}));
  }

  public static get Instance(): IntifaceFrontendLogger {
    return IntifaceFrontendLogger._logInstance;
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

  public static Logs() {
    if (IntifaceFrontendLogger._logInstance === undefined) {
      throw new Error("Must call create before acessing Frontend Log Store");
    }
    return IntifaceFrontendLogger._logInstance._logStore;
  }

  protected static _logInstance: IntifaceFrontendLogger;
  protected _logStore: any[] = [];
  protected _logger: winston.Logger;

  protected constructor() {
    super("frontend", "General");
    // DO NOT MAKE ANY WINSTON TRANSPORTS OWNED BY THE LOGGER FOR NOW.
    //
    // There's something weird about how the TransportStream types are defined
    // in winston-transport that causes typescript to freak out when trying to
    // compile modules that depend on this one (like intiface), and it is
    // extremely hard to debug. All TransportStream instances should be added to
    // the logger but never owned by one of our loggers (i.e. don't keep an
    // IntifaceFrontendLogStorageTransport as a member of this class.)
    const frontendTransport = new IntifaceFrontendLogStorageTransport(this._logStore, 10000, {});
    this._logger.add(frontendTransport);
    frontendTransport.on("logged", (transport, level, msg, meta) => {
      this.emit("logged", transport, level, msg, meta);
    });
  }
}
