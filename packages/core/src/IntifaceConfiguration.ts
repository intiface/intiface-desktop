export class IntifaceConfiguration {
  private serverName: string = "Buttplug Server";
  private serverMaxPingTime: number = 0;
  private ipcServerPortName: string = "ButtplugPort";
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
  }

  get ServerMaxPingTime(): number {
    return this.serverMaxPingTime;
  }

  set ServerMaxPingTime(aPing: number) {
    if (aPing < 0) {
      throw new Error("Ping must be >= 0.");
    }
    this.serverMaxPingTime = aPing;
  }

  get IpcServerPortName(): string {
    return this.ipcServerPortName;
  }

  set IpcServerPortName(aName: string) {
    this.ipcServerPortName = aName;
  }

  get ListenOnIpcServer(): boolean {
    return this.listenOnIpcServer;
  }

  set ListenOnIpcServer(aShouldListen: boolean) {
    this.listenOnIpcServer = aShouldListen;
  }

  get ListenOnWebsocketServer(): boolean {
    return this.listenOnWebsocketServer;
  }

  set ListenOnWebsocketServer(aShouldListen: boolean) {
    this.listenOnWebsocketServer = aShouldListen;
  }

  get ListenOnProxyServer(): boolean {
    return this.listenOnProxyServer;
  }

  set ListenOnProxyServer(aShouldListen: boolean) {
    this.listenOnProxyServer = aShouldListen;
  }

  get CheckForDeviceListUpdates(): boolean {
    return this.CheckForDeviceListUpdates;
  }

  set CheckForDeviceListUpdates(aCheck: boolean) {
    this.checkForDeviceListUpdates = aCheck;
  }

  get WebsocketServerInsecurePort(): number {
    return this.websocketServerInsecurePort;
  }

  set WebsocketServerInsecurePort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.websocketServerInsecurePort = aPort;
  }

  get WebsocketServerSecurePort(): number {
    return this.websocketServerSecurePort;
  }

  set WebsocketServerSecurePort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.websocketServerSecurePort = aPort;
  }

  get ProxyServerPort(): number {
    return this.proxyServerPort;
  }

  set ProxyServerPort(aPort: number) {
    if (aPort < 1 || aPort > 65536) {
      throw new Error("Invalid network port number.");
    }
    this.proxyServerPort = aPort;
  }
}
