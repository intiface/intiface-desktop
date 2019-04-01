import { EventEmitter } from "events";
import { ButtplugLogLevel } from "buttplug";
import * as os from "os";

export type EngineType = "js" | "csharp";

export class IntifaceConfiguration extends EventEmitter {
  private serverName: string = "Buttplug Server";
  private serverMaxPingTime: number = 0;
  private ipcServerPipeName: string = "ButtplugPort";
  private listenOnIpcServer: boolean = false;
  private listenOnWebsocketServer: boolean = false;
  private listenOnProxyServer: boolean = false;
  // private deviceListUpdateURL: string;
  private websocketServerAllInterfaces: boolean = false;
  private websocketServerUseInsecurePort: boolean = true;
  private websocketServerInsecurePort: number = 12345;
  private websocketServerUseSecurePort: boolean = false;
  private websocketServerSecurePort: number = 12346;
  private serverLogLevel: ButtplugLogLevel = ButtplugLogLevel.Info;
  private proxyServerPort: number = 12347;
  private engine: EngineType = os.platform() === "win32" ? "csharp" : "js";
  private usePrereleaseEngine: boolean = false;
  private currentEngineVersion: string = "";
  private currentDeviceFileVersion: number = 0;
  private automaticallyCheckForUpdates: boolean = true;
  private hasRunSetup: boolean = false;
  private deviceFileUpdateAvailable: boolean = false;
  private engineUpdateAvailable: boolean = false;
  private applicationUpdateAvailable: boolean = false;

  public Load(aConfigObj: object) {
    for (const propName of Object.getOwnPropertyNames(aConfigObj)) {
      // If we find keys we don't know what to do with, log and ignore. If we
      // have keys that aren't in the file, that's fine. This is also where
      // conversion code will need to go if we ever change configuration value
      // names/types.
      if (Object.keys(this).indexOf(propName) === -1) {
        console.log(`Configuration key ${propName} not recognized, ignoring`);
        continue;
      }
      // If we've accidentally saved a private variable, just ignore and continue.
      if (propName.startsWith("_")) {
        continue;
      }
      this[propName] = aConfigObj[propName];
    }
  }

  get ServerName(): string {
    return this.serverName;
  }

  set ServerName(aName: string) {
    this.serverName = aName;
    this.emit("update");
  }

  get ServerMaxPingTime(): number {
    return this.serverMaxPingTime;
  }

  set ServerMaxPingTime(aPing: number) {
    if (aPing < 0) {
      throw new Error("Ping must be >= 0.");
    }
    this.serverMaxPingTime = aPing;
    this.emit("update");
  }

  get IpcServerPipeName(): string {
    return this.ipcServerPipeName;
  }

  set IpcServerPipeName(aName: string) {
    this.ipcServerPipeName = aName;
    this.emit("update");
  }

  get ListenOnIpcServer(): boolean {
    return this.listenOnIpcServer;
  }

  set ListenOnIpcServer(aShouldListen: boolean) {
    this.listenOnIpcServer = aShouldListen;
    this.emit("update");
  }

  get ListenOnWebsocketServer(): boolean {
    return this.listenOnWebsocketServer;
  }

  set ListenOnWebsocketServer(aShouldListen: boolean) {
    this.listenOnWebsocketServer = aShouldListen;
    this.emit("update");
  }

  get ListenOnProxyServer(): boolean {
    return this.listenOnProxyServer;
  }

  set ListenOnProxyServer(aShouldListen: boolean) {
    this.listenOnProxyServer = aShouldListen;
    this.emit("update");
  }

  get WebsocketServerInsecurePort(): number {
    return this.websocketServerInsecurePort;
  }

  set WebsocketServerInsecurePort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.websocketServerInsecurePort = aPort;
    this.emit("update");
  }

  get WebsocketServerSecurePort(): number {
    return this.websocketServerSecurePort;
  }

  set WebsocketServerSecurePort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.websocketServerSecurePort = aPort;
    this.emit("update");
  }

  get WebsocketServerUseInsecurePort(): boolean {
    return this.websocketServerUseInsecurePort;
  }

  set WebsocketServerUseInsecurePort(aUsePort: boolean) {
    this.websocketServerUseInsecurePort = aUsePort;
    this.emit("update");
  }

  get WebsocketServerUseSecurePort(): boolean {
    return this.websocketServerUseSecurePort;
  }

  set WebsocketServerUseSecurePort(aUsePort: boolean) {
    this.websocketServerUseSecurePort = aUsePort;
    this.emit("update");
  }

  get ProxyServerPort(): number {
    return this.proxyServerPort;
  }

  set ProxyServerPort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.proxyServerPort = aPort;
    this.emit("update");
  }

  get Engine(): EngineType {
    return this.engine;
  }

  set Engine(aEngine: EngineType) {
    this.engine = aEngine;
    this.emit("update");
  }

  get CurrentEngineVersion(): string {
    return this.currentEngineVersion;
  }

  set CurrentEngineVersion(aVersion: string) {
    this.currentEngineVersion = aVersion;
    this.emit("update");
  }

  get CurrentDeviceFileVersion(): number {
    return this.currentDeviceFileVersion;
  }

  set CurrentDeviceFileVersion(aVersion: number) {
    this.currentDeviceFileVersion = aVersion;
    this.emit("update");
  }

  get UsePrereleaseEngine(): boolean {
    return this.usePrereleaseEngine;
  }

  set UsePrereleaseEngine(aUse: boolean) {
    this.usePrereleaseEngine = aUse;
    this.emit("update");
  }

  get AutomaticallyCheckForUpdates(): boolean {
    return this.automaticallyCheckForUpdates;
  }

  set AutomaticallyCheckForUpdates(aCheck: boolean) {
    this.automaticallyCheckForUpdates = aCheck;
    this.emit("update");
  }

  get WebsocketServerAllInterfaces(): boolean {
    return this.websocketServerAllInterfaces;
  }

  set WebsocketServerAllInterfaces(aAllInterfaces: boolean) {
    this.websocketServerAllInterfaces = aAllInterfaces;
    this.emit("update");
  }

  get ServerLogLevel(): ButtplugLogLevel {
    return this.serverLogLevel;
  }

  set ServerLogLevel(aLevel: ButtplugLogLevel) {
    this.serverLogLevel = aLevel;
    this.emit("update");
  }

  get HasRunSetup(): boolean {
    return this.hasRunSetup;
  }

  set HasRunSetup(aHasSetup: boolean) {
    this.hasRunSetup = aHasSetup;
    this.emit("update");
  }

  get EngineUpdateAvailable(): boolean {
    return this.engineUpdateAvailable;
  }

  set EngineUpdateAvailable(aUpdate: boolean) {
    this.engineUpdateAvailable = aUpdate;
    this.emit("update");
  }

  get ApplicationUpdateAvailable(): boolean {
    return this.applicationUpdateAvailable;
  }

  set ApplicationUpdateAvailable(aUpdate: boolean) {
    this.applicationUpdateAvailable = aUpdate;
    this.emit("update");
  }

  get DeviceFileUpdateAvailable(): boolean {
    return this.deviceFileUpdateAvailable;
  }

  set DeviceFileUpdateAvailable(aUpdate: boolean) {
    this.deviceFileUpdateAvailable = aUpdate;
    this.emit("update");
  }
}
