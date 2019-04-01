import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfigurationEventManager } from "./IntifaceConfigurationEventManager";
import { IntifaceConfiguration } from "./IntifaceConfiguration";

// Sends messages from the frontend/GUI to the backend/server process.
export abstract class FrontendConnector extends EventEmitter {

  public get Config(): IntifaceConfiguration | null {
    if (this._config === null) {
      return null;
    }
    // This can be null up until we receive a configuration from the parent process.
    return this._config!.Config;
  }

  private _config: IntifaceConfigurationEventManager | null = null;

  protected constructor() {
    super();
  }

  public SendMessage(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    this.SendMessageInternal(Buffer.from(IntifaceProtocols.IntifaceFrontendMessage.encode(aMsg).finish()));
  }

  public CheckForUpdates() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      checkForUpdates: IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.create(),
    });
    this.SendMessage(msg);
  }

  public UpdateDeviceFile() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateDeviceFile: IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.create(),
    });
    this.SendMessage(msg);
  }

  public UpdateEngine() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateEngine: IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.create(),
    });
    this.SendMessage(msg);
  }

  public UpdateApplication() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateApplication: IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.create(),
    });
    this.SendMessage(msg);
  }

  public StartProcess() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      startProcess: IntifaceProtocols.IntifaceFrontendMessage.StartProcess.create(),
    });
    this.SendMessage(msg);
  }

  public StopProcess() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      stopProcess: IntifaceProtocols.IntifaceFrontendMessage.StopProcess.create(),
    });
    this.SendMessage(msg);
  }

  protected abstract SendMessageInternal(aRawMsg: Buffer): void;

  protected Ready() {
    const readyMsg = IntifaceProtocols.IntifaceFrontendMessage.create({
      ready: IntifaceProtocols.IntifaceFrontendMessage.Ready.create(),
    });
    this.SendMessage(readyMsg);
  }

  protected EmitServerMessage(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    this.emit("message", aMsg);
  }

  protected ProcessMessage(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    if (aMsg.configuration !== null) {
      // If we've gotten a configuration message from the backend, that means
      // the config file was loaded and we need to overwrite our current state
      // with that.
      this._config = new IntifaceConfigurationEventManager(JSON.parse(aMsg.configuration!.configuration!));
      // Any time the configuration is saved, throw it at the backend so we can
      // update settings and save the file.
      this._config.addListener("configsaved", (aConfig: string) => {
        const configMsg = IntifaceProtocols.IntifaceFrontendMessage.create({
          updateConfig: IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.create({ configuration: aConfig }),
        });
        this.SendMessage(configMsg);
      });
    } else if (aMsg.serverProcessMessage !== null) {
      const processMsg = aMsg.serverProcessMessage!;
      if (processMsg.processLog !== null) {
        console.log(processMsg.processLog!.message);
      }
    } else if (aMsg.updatesAvailable !== null) {
    }

    // Always emit after we're done, just in case extra things need to be done otherwise.
    this.EmitServerMessage(aMsg);
  }
}
