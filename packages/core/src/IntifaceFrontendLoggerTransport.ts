import * as winston from "winston";
import * as TransportStream from "winston-transport";
import { FrontendConnector } from "./FrontendConnector";

export class IntifaceFrontendLoggerTransport extends TransportStream {
  private _connector: FrontendConnector;

  public constructor(aConnector: FrontendConnector, aOptions: TransportStream.TransportStreamOptions | undefined) {
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
