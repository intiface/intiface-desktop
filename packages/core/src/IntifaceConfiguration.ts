import { EventEmitter } from "events";
import { ButtplugLogLevel } from "buttplug";
import * as os from "os";

export type EngineType = "js" | "csharp";

export class IntifaceConfiguration extends EventEmitter {
  private serverName: string = "Buttplug Server";
  private serverMaxPingTime: number = 0;
  private ipcServerPipeName: string = "ButtplugPort";
  private useIpcServer: boolean = false;
  private useWebsocketServerInsecure: boolean = true;
  private useWebsocketServerSecure: boolean = false;
  private useProxyServer: boolean = false;
  // private deviceListUpdateURL: string;
  private websocketServerAllInterfaces: boolean = false;
  private websocketServerInsecurePort: number = 12345;
  private websocketServerSecurePort: number = 12346;
  private serverLogLevel: ButtplugLogLevel = ButtplugLogLevel.Info;
  private proxyServerPort: number = 12347;
  private engine: EngineType = os.platform() === "win32" ? "csharp" : "js";
  private usePrereleaseEngine: boolean = false;
  private currentEngineVersion: string = "";
  private currentDeviceFileVersion: number = 0;
  private checkForUpdatesOnStart: boolean = true;
  private hasRunSetup: boolean = false;
  private deviceFileUpdateAvailable: boolean = false;
  private engineUpdateAvailable: boolean = false;
  private applicationUpdateAvailable: boolean = false;
  private hasUsableEngineExecutable: boolean = false;
  private hasCertificates: boolean = false;

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

  public get ServerName(): string {
    return this.serverName;
  }

  public set ServerName(aName: string) {
    this.serverName = aName;
    this.emit("update");
  }

  public get ServerMaxPingTime(): number {
    return this.serverMaxPingTime;
  }

  public set ServerMaxPingTime(aPing: number) {
    if (aPing < 0) {
      throw new Error("Ping must be >= 0.");
    }
    this.serverMaxPingTime = aPing;
    this.emit("update");
  }

  public get IpcServerPipeName(): string {
    return this.ipcServerPipeName;
  }

  public set IpcServerPipeName(aName: string) {
    this.ipcServerPipeName = aName;
    this.emit("update");
  }

  public get UseIpcServer(): boolean {
    return this.useIpcServer;
  }

  public set UseIpcServer(aShouldListen: boolean) {
    this.useIpcServer = aShouldListen;
    this.emit("update");
  }

  public get UseWebsocketServerInsecure(): boolean {
    return this.useWebsocketServerInsecure;
  }

  public set UseWebsocketServerInsecure(aShouldListen: boolean) {
    this.useWebsocketServerInsecure = aShouldListen;
    this.emit("update");
  }

  public get UseWebsocketServerSecure(): boolean {
    return this.useWebsocketServerSecure;
  }

  public set UseWebsocketServerSecure(aShouldListen: boolean) {
    this.useWebsocketServerSecure = aShouldListen;
    this.emit("update");
  }

  public get UseProxyServer(): boolean {
    return this.useProxyServer;
  }

  public set UseProxyServer(aShouldListen: boolean) {
    this.useProxyServer = aShouldListen;
    this.emit("update");
  }

  public get WebsocketServerInsecurePort(): number {
    return this.websocketServerInsecurePort;
  }

  public set WebsocketServerInsecurePort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.websocketServerInsecurePort = aPort;
    this.emit("update");
  }

  public get WebsocketServerSecurePort(): number {
    return this.websocketServerSecurePort;
  }

  public set WebsocketServerSecurePort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.websocketServerSecurePort = aPort;
    this.emit("update");
  }

  public get ProxyServerPort(): number {
    return this.proxyServerPort;
  }

  public set ProxyServerPort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.proxyServerPort = aPort;
    this.emit("update");
  }

  public get Engine(): EngineType {
    return this.engine;
  }

  public set Engine(aEngine: EngineType) {
    this.engine = aEngine;
    this.emit("update");
  }

  public get CurrentEngineVersion(): string {
    return this.currentEngineVersion;
  }

  public set CurrentEngineVersion(aVersion: string) {
    this.currentEngineVersion = aVersion;
    this.emit("update");
  }

  public get CurrentDeviceFileVersion(): number {
    return this.currentDeviceFileVersion;
  }

  public set CurrentDeviceFileVersion(aVersion: number) {
    this.currentDeviceFileVersion = aVersion;
    this.emit("update");
  }

  public get UsePrereleaseEngine(): boolean {
    return this.usePrereleaseEngine;
  }

  public set UsePrereleaseEngine(aUse: boolean) {
    this.usePrereleaseEngine = aUse;
    this.emit("update");
  }

  public get CheckForUpdatesOnStart(): boolean {
    return this.checkForUpdatesOnStart;
  }

  public set CheckForUpdatesOnStart(aCheck: boolean) {
    this.checkForUpdatesOnStart = aCheck;
    this.emit("update");
  }

  public get WebsocketServerAllInterfaces(): boolean {
    return this.websocketServerAllInterfaces;
  }

  public set WebsocketServerAllInterfaces(aAllInterfaces: boolean) {
    this.websocketServerAllInterfaces = aAllInterfaces;
    this.emit("update");
  }

  public get ServerLogLevel(): ButtplugLogLevel {
    return this.serverLogLevel;
  }

  public set ServerLogLevel(aLevel: ButtplugLogLevel) {
    this.serverLogLevel = aLevel;
    this.emit("update");
  }

  public get HasRunSetup(): boolean {
    return this.hasRunSetup;
  }

  public set HasRunSetup(aHasSetup: boolean) {
    this.hasRunSetup = aHasSetup;
    this.emit("update");
  }

  public get EngineUpdateAvailable(): boolean {
    return this.engineUpdateAvailable;
  }

  public set EngineUpdateAvailable(aUpdate: boolean) {
    this.engineUpdateAvailable = aUpdate;
    this.emit("update");
  }

  public get ApplicationUpdateAvailable(): boolean {
    return this.applicationUpdateAvailable;
  }

  public set ApplicationUpdateAvailable(aUpdate: boolean) {
    this.applicationUpdateAvailable = aUpdate;
    this.emit("update");
  }

  public get DeviceFileUpdateAvailable(): boolean {
    return this.deviceFileUpdateAvailable;
  }

  public set DeviceFileUpdateAvailable(aUpdate: boolean) {
    this.deviceFileUpdateAvailable = aUpdate;
    this.emit("update");
  }

  public get HasUsableEngineExecutable(): boolean {
    return this.hasUsableEngineExecutable;
  }

  public set HasUsableEngineExecutable(aUpdate: boolean) {
    this.hasUsableEngineExecutable = aUpdate;
    this.emit("update");
  }

  public get HasCertificates(): boolean {
    return this.hasCertificates;
  }

  public set HasCertificates(aHasCerts: boolean) {
    this.hasCertificates = aHasCerts;
    this.emit("update");
  }

  public get HasUpdatesAvailable() {
    return this.applicationUpdateAvailable || this.engineUpdateAvailable || this.deviceFileUpdateAvailable;
  }
}
