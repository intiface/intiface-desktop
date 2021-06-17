import Vue from "vue";
import { ButtplugClient, ButtplugClientDevice, ButtplugWebsocketConnectorOptions } from "buttplug";
import { FrontendConnector, IntifaceConfiguration } from "intiface-core-library";
import { Component, Prop, Watch } from "vue-property-decorator";
import DeviceComponent from './DeviceComponent.vue';
import { watch } from "fs";

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
  private user_protocols: string[] = ["nobras", "tcode"];
  private in_use = false;
  
  private get IsDevicePanelBeingUsed() {
    return this.in_use;
  }

  private mounted() {
    this.connector.addListener("serverdisconnect", async () => {
      console.log("Got disconnection message");
      await this.disconnect()
    });
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

  private addUserDeviceConfig() {

  }

  private removeUserDeviceConfig() {

  }
}
