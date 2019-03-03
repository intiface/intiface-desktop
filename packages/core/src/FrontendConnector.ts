import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfigurationEventManager } from "./IntifaceConfigurationEventManager";

// Sends messages from the frontend/GUI to the backend/server process.
export abstract class FrontendConnector extends EventEmitter {

  public get Config() {
    // This can be null up until we receive a configuration from the parent process.
    return this._config;
  }

  private _config: IntifaceConfigurationEventManager | null = null;

  protected constructor() {
    super();
  }

  public SendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage) {
    this.SendMessageInternal(Buffer.from(IntifaceProtocols.ServerFrontendMessage.encode(aMsg).finish()));
  }

  protected abstract SendMessageInternal(aRawMsg: Buffer): void;

  protected Ready() {
    const readyMsg = IntifaceProtocols.ServerFrontendMessage.create({
      ready: IntifaceProtocols.ServerFrontendMessage.Ready.create(),
    });
    this.SendMessage(readyMsg);
  }

  protected EmitServerMessage(aMsg: IntifaceProtocols.ServerBackendMessage) {
    this.emit("backendmessage", aMsg);
  }

  protected ProcessMessage(aMsg: IntifaceProtocols.ServerBackendMessage) {
    if (aMsg.configuration !== null) {
      // If we've gotten a configuration message from the backend, that means
      // the config file was loaded and we need to overwrite our current state
      // with that.
      this._config = new IntifaceConfigurationEventManager(JSON.parse(aMsg.configuration!.configuration!));
      console.log("Received configuration object");
      // Any time the configuration is saved, throw it at the backend so we can
      // update settings and save the file.
      this._config.addListener("configsaved", (aConfig: string) => {
        const configMsg = IntifaceProtocols.ServerFrontendMessage.UpdateConfig.create();
        configMsg.configuration = aConfig;
        this.SendMessage(configMsg);
      });
    }
  }
}
