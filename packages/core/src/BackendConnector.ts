import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfiguration } from "./IntifaceConfiguration";

// Sends message from the backend (which handles file IO, network, etc...) to
// the frontend/GUI.
export abstract class BackendConnector extends EventEmitter {

  protected constructor() {
    super();
  }

  public SendMessage(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    this.SendMessageInternal(Buffer.from(IntifaceProtocols.IntifaceBackendMessage.encode(aMsg).finish()));
  }

  public UpdateFrontendConfiguration(aConfig: IntifaceConfiguration) {
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      configuration: IntifaceProtocols.IntifaceBackendMessage.Configuration.create({
        configuration: JSON.stringify(aConfig),
      }),
    });
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

  protected abstract SendMessageInternal(aMsg: Buffer): void;

  // When we get something from the frontend, emit it so the server can do
  // something with it.
  protected ProcessMessage(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    this.emit("message", aMsg);
  }
}
