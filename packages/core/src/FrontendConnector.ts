import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfiguration } from "./IntifaceConfiguration";
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

  public abstract SendMessage(aMsg: IntifaceProtocols.ServerFrontendMessage): void;

  protected EmitServerMessage(aMsg: IntifaceProtocols.ServerProcessMessage) {
    this.emit("backendmessage", aMsg);
  }

  protected ProcessMessage(aMsg: IntifaceProtocols.ServerProcessMessage) {
    if (aMsg.configuration !== null) {
      // If we've gotten a configuration message from the backend, that means
      // the config file was loaded and we need to overwrite our current state
      // with that.
      this._config = new IntifaceConfigurationEventManager(JSON.parse(aMsg.configuration!.configuration!));
      // Any time the configuration is saved, throw it at the backend so we can
      // update settings and save the file.
      this._config.addListener("configsaved", (aConfig: string) => {
        const configMsg = new IntifaceProtocols.ServerFrontendMessage.UpdateConfig();
        configMsg.configuration = aConfig;
        this.SendMessage(configMsg);
      });
    }
  }
}
