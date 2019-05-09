import * as winston from "winston";
import * as TransportStream from "winston-transport";

export class IntifaceFrontendLogStorageTransport extends TransportStream {

  private _logStore: any[];
  // Maximum number of messages to store. All messages are written to the log
  // file.
  private _storeLimit: number;

  public constructor(aLogStore: any[], aLogLimit: number, aOptions: TransportStream.TransportStreamOptions) {
    super(aOptions);
    this._logStore = aLogStore;
    this._storeLimit = aLogLimit;
  }

  public log(info: any, callback: () => void) {
    this._logStore.push(info);
    while (this._logStore.length > this._storeLimit) {
      this._logStore.shift();
    }
    // Transports should emit messages
    this.emit("logged", info);
    callback();
  }
}
