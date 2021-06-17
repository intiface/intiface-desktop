import { EventEmitter } from "events";

export type ButtplugLogLevel = "Off" | "Error" | "Warn" | "Info" | "Debug" | "Trace";

export class IntifaceConfiguration extends EventEmitter {
  private serverName: string = "Intiface Server";
  private serverMaxPingTime: number = 0;
  private useWebsocketServerInsecure: boolean = true;
  // private deviceListUpdateURL: string;
  private websocketServerAllInterfaces: boolean = false;
  private websocketServerInsecurePort: number = 12345;
  private serverLogLevel: ButtplugLogLevel = "Info";
  private usePrereleaseEngine: boolean = false;
  private currentEngineVersion: string = "";
  private currentDeviceFileVersion: number = 0;
  private checkForUpdatesOnStart: boolean = true;
  private hasRunSetup: boolean = false;
  private deviceFileUpdateAvailable: boolean = false;
  private engineUpdateAvailable: boolean = false;
  private applicationUpdateAvailable: boolean = false;
  private hasUsableEngineExecutable: boolean = false;
  private startServerOnStartup: boolean = false;
  private withBluetoothLE: boolean = true;
  private withSerialPort: boolean = true;
  private withHID: boolean = true;
  private withLovenseHIDDongle: boolean = true;
  private withLovenseSerialDongle: boolean = true;
  private withLovenseConnectService: boolean = false;
  private withXInput: boolean = true;

  // Session variables. This will be saved, but won't be reloaded from the file
  // on next start. They should really only keep the state of a session, and are
  // expected to be reset.

  // IsOnline starts out as null, which means we haven't actually checked for a
  // connection yet. Once we've checked, it'll be true/false. Used for showing
  // proper errors during updates, etc...
  private _isOnline: boolean | null = null;

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
      // If we've saved a session variable, just ignore and continue.
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

  public get UseWebsocketServerInsecure(): boolean {
    // TODO This needs to be always on until we get more connection methods.
    return true; //this.useWebsocketServerInsecure;
  }

  public set UseWebsocketServerInsecure(aShouldListen: boolean) {
    this.useWebsocketServerInsecure = aShouldListen;
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

  public get CurrentEngineVersionNumber(): number {
    console.log(this.CurrentEngineVersion.substr(1));
    return parseInt(this.CurrentEngineVersion.substr(1))
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

  public get StartServerOnStartup(): boolean {
    return this.startServerOnStartup;
  }

  public set StartServerOnStartup(aStartServerOnStartup: boolean) {
    this.startServerOnStartup = aStartServerOnStartup;
    this.emit("update");
  }

  public get HasUpdatesAvailable() {
    return this.applicationUpdateAvailable || this.engineUpdateAvailable || this.deviceFileUpdateAvailable;
  }

  public get IsOnline(): boolean | null {
    return this._isOnline;
  }

  public set IsOnline(aIsOnline: boolean | null) {
    this._isOnline = aIsOnline;
  }

  public get WithBluetoothLE(): boolean {
    return this.withBluetoothLE;
  }

  public set WithBluetoothLE(aWithBluetoothLE: boolean) {
    this.withBluetoothLE = aWithBluetoothLE;
    this.emit("update");
  }

  public get WithHID(): boolean {
    return this.withHID;
  }

  public set WithHID(aWithHID: boolean) {
    this.withHID = aWithHID;
    this.emit("update");
  }

  public get WithSerialPort(): boolean  {
    return this.withSerialPort;
  }

  public set WithSerialPort(aWithSerialPort: boolean) {
    this.withSerialPort = aWithSerialPort;
    this.emit("update");
  }

  public get WithLovenseHIDDongle(): boolean {
    return this.withLovenseHIDDongle;
  }

  public set WithLovenseHIDDongle(aWithLovenseHIDDongle: boolean) {
    this.withLovenseHIDDongle = aWithLovenseHIDDongle;
    this.emit("update");
  }

  public get WithLovenseSerialDongle(): boolean {
    return this.withLovenseSerialDongle;
  }

  public set WithLovenseSerialDongle(aWithLovenseSerialDongle: boolean) {
    this.withLovenseSerialDongle = aWithLovenseSerialDongle;
    this.emit("update");
  }

  public get WithLovenseConnectService(): boolean {
    return this.withLovenseConnectService;
  }

  public set WithLovenseConnectService(aWithLovenseConnectService: boolean) {
    this.withLovenseConnectService = aWithLovenseConnectService;
    this.emit("update");
  }

  public get WithXInput(): boolean {
    return this.withXInput;
  }

  public set WithXInput(aWithXInput: boolean) {
    this.withXInput = aWithXInput;
    this.emit("update");
  }
}
