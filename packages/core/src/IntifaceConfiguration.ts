import { EventEmitter } from "events";

export class IntifaceConfiguration extends EventEmitter {
  private serverName: string = "Buttplug Server";
  private serverMaxPingTime: number = 0;
  private ipcServerPipeName: string = "ButtplugPort";
  private listenOnIpcServer: boolean = false;
  private listenOnWebsocketServer: boolean = false;
  private listenOnProxyServer: boolean = false;
  private checkForDeviceListUpdates: boolean = true;
  // private deviceListUpdateURL: string;
  private websocketServerInsecurePort: number = 12345;
  private websocketServerSecurePort: number = 12346;
  private proxyServerPort: number = 12347;

  public Load(aConfigObj: object) {
    for (const propName of Object.getOwnPropertyNames(aConfigObj)) {
      if (Object.keys(this).indexOf(propName) === -1) {
        throw new Error(`Unknown property ${propName}`);
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

  get CheckForDeviceListUpdates(): boolean {
    return this.CheckForDeviceListUpdates;
  }

  set CheckForDeviceListUpdates(aCheck: boolean) {
    this.checkForDeviceListUpdates = aCheck;
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
}
