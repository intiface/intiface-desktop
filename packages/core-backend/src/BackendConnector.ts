import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfiguration } from "intiface-core-library";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import * as winston from "winston";

// Sends message from the backend (which handles file IO, network, etc...) to
// the frontend/GUI.
export abstract class BackendConnector extends EventEmitter {

  private _logger: winston.Logger;
  private _isExiting: boolean = false;

  protected constructor() {
    super();
    this._logger = IntifaceBackendLogger.GetChildLogger("backend", this.constructor.name);
    IntifaceBackendLogger.AddConnectorTransport(this);
  }

  public get IsExiting() {
    return this._isExiting;
  }

  public set IsExiting(aIsExiting: boolean) {
    this._isExiting = aIsExiting;
  }

  public SendMessage(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    // If we're exiting, it should be assumed that the frontend is gone. Drop
    // any messages.
    if (this._isExiting) {
      return;
    }
    this.SendMessageInternal(Buffer.from(IntifaceProtocols.IntifaceBackendMessage.encode(aMsg).finish()));
  }

  public SendOk(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    const okMsg = IntifaceProtocols.IntifaceBackendMessage.create({
      ok: IntifaceProtocols.IntifaceBackendMessage.Ok.create(),
    });
    okMsg.index = aMsg.index;
    this.SendMessage(okMsg);
  }

  public SendError(aMsg: IntifaceProtocols.IntifaceFrontendMessage, aErrorMsg: string) {
    const errMsg = IntifaceProtocols.IntifaceBackendMessage.create({
      error: IntifaceProtocols.IntifaceBackendMessage.Error.create({
        reason: aErrorMsg,
      }),
    });
    errMsg.index = aMsg.index;
    this.SendMessage(errMsg);
  }

  public UpdateFrontendConfiguration(aConfig: IntifaceConfiguration,
                                     aMsg: IntifaceProtocols.IntifaceFrontendMessage | null) {
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      configuration: IntifaceProtocols.IntifaceBackendMessage.Configuration.create({
        configuration: JSON.stringify(aConfig),
      }),
    });
    if (aMsg) {
      msg.index = aMsg.index;
    }
    this.SendMessage(msg);
  }

  public UpdateDownloadProgress(aProgress: any) {
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      downloadProgress: IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.create({
        bytesReceived: aProgress.receivedBytes,
        bytesTotal: aProgress.totalBytes,
      }),
    });
    this.SendMessage(msg);
  }

  public async LogMessage(aJsonMsg: string) {
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      logMessage: IntifaceProtocols.IntifaceBackendMessage.LogMessage.create({
        info: aJsonMsg,
      }),
    });
    await this.SendMessage(msg);
  }

  protected abstract SendMessageInternal(aMsg: Buffer): void;

  // When we get something from the frontend, emit it so the server can do
  // something with it.
  protected ProcessMessage(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    if (aMsg.logMessage) {
      const logObj = JSON.parse(aMsg.logMessage!.info!);
      this._logger.log(logObj);
      return;
    }
    this.emit("message", aMsg);
  }
}
