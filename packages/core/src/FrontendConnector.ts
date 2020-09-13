import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfigurationEventManager } from "./IntifaceConfigurationEventManager";
import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { IntifaceUtils } from "./Utils";
import { IntifaceFrontendLogger } from "./IntifaceFrontendLogger";
import * as winston from "winston";

class PromiseFuncs {
  public resolve: (aMsg: IntifaceProtocols.IntifaceBackendMessage) => void;
  public reject: (aError: Error) => void;
}

// Sends messages from the frontend/GUI to the backend/server process.
export abstract class FrontendConnector extends EventEmitter {

  // Used for creating message pairs, when needed.
  private _msgId: number = 1;
  private _taskMap: Map<number, PromiseFuncs> =
    new Map<number, PromiseFuncs>();
  private _logger: winston.Logger;
  // State we need to manage from the Backend, that may not persist in the
  // frontend components.
  private _isServerProcessRunning: boolean = false;
  private _clientName: string | null = null;
  private _devices: Map<number, string> = new Map<number, string>();
  private _devices_change_tracker = 1;

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
    this._logger = IntifaceFrontendLogger.GetChildLogger(this.constructor.name);
    IntifaceFrontendLogger.AddConnectorTransport(this);
  }

  public get ClientName(): string | null {
    return this._clientName;
  }

  public get Devices(): any {
    // Haaaaaaack via https://github.com/vuejs/vue/issues/2410#issuecomment-318487855
    return this._devices_change_tracker && this._devices!;
  }

  public get IsServerProcessRunning(): boolean {
    return this._isServerProcessRunning;
  }

  public async LogMessage(aJsonMsg: string) {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      logMessage: IntifaceProtocols.IntifaceFrontendMessage.LogMessage.create({
        info: aJsonMsg,
      }),
    });
    await this.SendMessageWithoutReturn(msg);
  }

  public async CheckForUpdates() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      checkForUpdates: IntifaceProtocols.IntifaceFrontendMessage.CheckForUpdates.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async ResetIntifaceConfiguration() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      resetIntifaceConfiguration: IntifaceProtocols.IntifaceFrontendMessage.ResetIntifaceConfiguration.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async UpdateDeviceFile() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateDeviceFile: IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async UpdateEngine() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateEngine: IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async UpdateApplication() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateApplication: IntifaceProtocols.IntifaceFrontendMessage.UpdateApplication.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async StartProcess() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      startProcess: IntifaceProtocols.IntifaceFrontendMessage.StartProcess.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async StopProcess() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      stopProcess: IntifaceProtocols.IntifaceFrontendMessage.StopProcess.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async GenerateCertificate() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      generateCertificate: IntifaceProtocols.IntifaceFrontendMessage.GenerateCertificate.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async RunCertificateAcceptanceServer(): Promise<IntifaceProtocols.IntifaceBackendMessage> {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      runCertificateAcceptanceServer: IntifaceProtocols.IntifaceFrontendMessage.RunCertificateAcceptanceServer.create(),
    });
    return await this.SendMessageExpectReturn(msg);
  }

  public async StopCertificateAcceptanceServer() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      stopCertificateAcceptanceServer: IntifaceProtocols.IntifaceFrontendMessage.StopCertificateAcceptanceServer.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  public async CancelUpdate() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      cancelUpdate: IntifaceProtocols.IntifaceFrontendMessage.CancelUpdate.create(),
    });
    await this.SendMessageExpectOk(msg);
  }

  protected abstract SendMessageInternal(aRawMsg: Buffer): void;

  protected SendMessageWithoutReturn(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    this.SendMessageInternal(Buffer.from(IntifaceProtocols.IntifaceFrontendMessage.encode(aMsg).finish()));
  }

  protected async SendMessageExpectReturn(aMsg: IntifaceProtocols.IntifaceFrontendMessage)
  : Promise<IntifaceProtocols.IntifaceBackendMessage> {
    // Tag every outgoing message.
    aMsg.index = this._msgId;
    this._msgId += 1;

    const [p, res, rej] = IntifaceUtils.MakePromise<IntifaceProtocols.IntifaceBackendMessage>();
    const promiseFuncs = new PromiseFuncs();
    promiseFuncs.resolve = res;
    promiseFuncs.reject = rej;

    this._taskMap.set(aMsg.index, promiseFuncs);
    this.SendMessageWithoutReturn(aMsg);
    const msg = await p;
    if (msg.error !== null) {
      throw msg.error;
    }
    return msg;
  }

  protected async SendMessageExpectOk(aMsg: IntifaceProtocols.IntifaceFrontendMessage): Promise<void> {
    const msg = await this.SendMessageExpectReturn(aMsg);
    // SendMessageExpectReturn will throw error if something returns error
    // remotely, so in this case we've used the wrong function for message
    // handling.
    if (msg.ok === null) {
      throw new Error("Expected to receive Ok, didn't get get it.");
    }
    return;
  }

  protected async Ready() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      ready: IntifaceProtocols.IntifaceFrontendMessage.Ready.create(),
    });
    const configMsg = await this.SendMessageExpectReturn(msg);

    if (!configMsg.configuration) {
      throw new Error("Didn't get configuration as expected. Cannot proceed.");
    }

    this._config = new IntifaceConfigurationEventManager(JSON.parse(configMsg.configuration!.configuration!));
    // Any time the configuration is saved, throw it at the backend so we can
    // update settings and save the file.
    this._config.addListener("configsaved", (aConfig: string) => {
      const updateConfigMsg = IntifaceProtocols.IntifaceFrontendMessage.create({
        updateConfig: IntifaceProtocols.IntifaceFrontendMessage.UpdateConfig.create({ configuration: aConfig }),
      });
      this.SendMessageWithoutReturn(updateConfigMsg);
    });

    if (this._config.Config.CheckForUpdatesOnStart) {
      // After we've sent ready and gotten back our configuration, trigger an
      // update check in the background if we're supposed to check for updates
      // at startup. This will do the check without hanging the GUI on startup.
      process.nextTick(async () => {
        await this.CheckForUpdates();
      });
    }

    if (this._config.Config.StartServerOnStartup) {
      // If we want to start the server on startup, do it from the frontend so
      // we get all of the message chain and updates that we expect.
      process.nextTick(async () => {
        await this.StartProcess();
      });
    }

  }

  protected EmitServerMessage(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    this.emit("message", aMsg);
  }

  protected ProcessMessage(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    if (aMsg.index !== 0) {
      if (!this._taskMap.has(aMsg.index)) {
        this._logger.warn(`Got reply for message ${aMsg.index} with no matched promise.`);
      } else {
        // Save off our promise and delete from the map, then resolve it.
        const p = this._taskMap.get(aMsg.index)!;
        this._taskMap.delete(aMsg.index);
        p.resolve(aMsg);
      }
      return;
    }

    if (aMsg.configuration !== null) {
      if (!this._config) {
        throw new Error("Configuration not set up yet, cannot update.");
      }
      this._config.Config.Load(JSON.parse(aMsg.configuration!.configuration!));
      return;
    }

    if (aMsg.serverProcessMessage !== null) {
      this.ProcessProcessMessage(aMsg.serverProcessMessage!);
      return;
    }

    if (aMsg.downloadProgress) {
      this.emit("progress", aMsg.downloadProgress);
    }

    if (aMsg.logMessage) {
      const logObj = JSON.parse(aMsg.logMessage!.info!);
      IntifaceFrontendLogger.Logger.log(logObj);
    }

    if (aMsg.processError) {
      this._isServerProcessRunning = false;
      this._devices.clear();
      this._devices_change_tracker += 1;
      this.EmitServerMessage(aMsg);
    }
  }

  // Ah, the mistakes in naming that led to this point.
  protected ProcessProcessMessage(aMsg: IntifaceProtocols.IServerProcessMessage) {
    if (aMsg.processLog !== null) {
      // Handled in the parent process.
      return;
    }

    if (aMsg.processStarted) {
      this._isServerProcessRunning = true;
      return;
    }

    if (aMsg.processEnded) {
      this._isServerProcessRunning = false;
      this._devices.clear();
      this._devices_change_tracker += 1;
      return;
    }

    if (aMsg.clientConnected) {
      this._clientName = aMsg.clientConnected!.clientName!;
    }

    if (aMsg.clientDisconnected) {
      this._clientName = null;
    }

    if (aMsg.deviceConnected) {
      console.log("Got Device Connected");
      this._devices.set(aMsg.deviceConnected!.deviceId!, aMsg.deviceConnected!.deviceName!);
      this._devices_change_tracker += 1;
    }

    if (aMsg.deviceDisconnected) {
      console.log("Got Device disconnected");
      this._devices.delete(aMsg.deviceDisconnected!.deviceId!);
      this._devices_change_tracker += 1;
    }
  }
}
