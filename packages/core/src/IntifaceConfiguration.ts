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

  constructor() {
  }

  public Load(aConfigStr: string) {
  }
}
