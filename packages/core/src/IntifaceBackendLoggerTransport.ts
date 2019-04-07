import { BackendConnector } from "./BackendConnector";
import * as path from "path";
import * as winston from "winston";
import * as TransportStream from "winston-transport";

export class IntifaceBackendLoggerTransport extends TransportStream {
  private _connector: BackendConnector;

  public constructor(aConnector: BackendConnector, aOptions: TransportStream.TransportStreamOptions | undefined) {
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
