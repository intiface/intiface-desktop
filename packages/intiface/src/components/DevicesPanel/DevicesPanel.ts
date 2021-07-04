import Vue from "vue";
import { ButtplugClient, ButtplugClientDevice, ButtplugWebsocketConnectorOptions } from "buttplug";
import { FrontendConnector, IntifaceConfiguration, DeviceConfigurationManager, SerialProtocolConfiguration } from "intiface-core-library";
import { Component, Prop, Watch } from "vue-property-decorator";
import DeviceComponent from './DeviceComponent.vue';
import { watch } from "fs";
import { IProtocolConfiguration } from "../../../../core/dist/device_configuration/IProtocolConfiguration";

@Component({
  name: "DevicesPanel",
  components: {
    DeviceComponent
  },
})
export default class DevicesPanel extends Vue {
  @Prop()
  private connector!: FrontendConnector;
  @Prop()
  private config!: IntifaceConfiguration;
  private client: ButtplugClient = new ButtplugClient("Intiface Desktop Device Panel");
  private devices: Array<ButtplugClientDevice> = [];
  private user_protocols: object[] = [{value: "nobra", text: "Nobra's Silicone Dreams"}, {value: "tcode-v03", text: "TCode v0.3 (OSR2/SR6)"}];
  private in_use = false;
  private serial_port_names: object[] = [];
  private protocol_name: string | null = null;
  private serial_port: string | null = null;
  private baud_rate: number | null = null;
  private baud_rates: number[] = [1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200];
  private deviceManager: DeviceConfigurationManager = new DeviceConfigurationManager();
  private device_configs: Map<string, IProtocolConfiguration[]> = new Map<string, IProtocolConfiguration[]>();

  private get IsDevicePanelBeingUsed() {
    return this.in_use;
  }

  private async mounted() {
    let config = await this.connector.RequestUserDeviceConfig();
    this.deviceManager.LoadUserConfigurationFromJson(config);
    this.device_configs = this.deviceManager.UserConfig;
    this.connector.addListener("serverdisconnect", async () => {
      console.log("Got disconnection message");
      await this.disconnect()
    });
    this.connector.RequestSerialPortList().then((p: [string, string][]) => {
      this.serial_port_names = [];
      for (let port of p) {
        this.serial_port_names.push({
          value: port[0],
          text: `${port[1]} (${port[0]})`
        })
      }
    });
    this.$forceUpdate();
  }

  private async startServerAndScanForDevices() {
    try {
      if (!this.connector.IsServerProcessRunning) {
        await this.connector.StartProcess();
        await this.connectAndScanForDevices();
      }
    } catch (e) {
      this.$emit("error", e);
    }
  }

  private async connectAndScanForDevices() {
    this.in_use = true;
    const options = new ButtplugWebsocketConnectorOptions();
    options.Address = `ws://localhost:${this.config.WebsocketServerInsecurePort}`;
    this.client.addListener("deviceadded", (device: ButtplugClientDevice) => {
      this.devices.push(device);
    });
    this.client.addListener("deviceremoved", (device) => {
      const index = this.devices.findIndex((x: ButtplugClientDevice) => x.Index == device.Index);
      if (index >= 0) {
        this.devices.splice(index, 1);
      }
    });
    this.client.addListener("serverdisconnect", () => this.cleanUp());
    await this.client.connect(options);
    await this.client.startScanning();
  }

  private async startScanning() {
    await this.client.startScanning();
  }

  private async stopScanning() {
    await this.client.stopScanning();
  }

  private async disconnect() {
    await this.client.disconnect();
    this.cleanUp();
  }

  private cleanUp() {
    this.client = new ButtplugClient("Intiface Desktop Device Panel");
    this.in_use = false;
    this.devices = [];
  }

  private async addUserDeviceConfig() {
    if (this.protocol_name === null || this.serial_port === null || this.baud_rate === null) {
      this.$emit("error", "Protocol, serial port, and baud rate must be set to add a user device configuration");
      return;
    }
    if (this.deviceManager.HasPort(this.serial_port)) {
      this.$emit("error", `Serial port ${this.serial_port} is already used in another configuration. Either use a different serial port or remove the configuration using ${this.serial_port}`);
      return;
    }
    this.deviceManager.AddUserConfig(this.protocol_name, new SerialProtocolConfiguration(this.serial_port, this.baud_rate, 8, 1, "N"));
    let config = this.deviceManager.UserConfigAsJSON;
    await this.connector.UpdateUserDeviceConfig(config);
    this.device_configs = this.deviceManager.UserConfig;
    this.$forceUpdate();
  }

  private async removeUserDeviceConfig(protocol: string, config: IProtocolConfiguration) {
    this.deviceManager.RemoveUserConfig(protocol, config);
    let new_config = this.deviceManager.UserConfigAsJSON;
    await this.connector.UpdateUserDeviceConfig(new_config);
    this.device_configs = this.deviceManager.UserConfig;
    this.$forceUpdate();
  }
}
