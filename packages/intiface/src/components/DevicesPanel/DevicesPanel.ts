import Vue from "vue";
import { ButtplugClient, ButtplugClientDevice, ButtplugWebsocketConnectorOptions } from "buttplug";
import { FrontendConnector } from "intiface-core-library";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class DevicesPanel extends Vue {
  @Prop()
  private connector!: FrontendConnector;
  private client: ButtplugClient = new ButtplugClient("Intiface Desktop Device Panel");
  private devices: Array<ButtplugClientDevice> = [];
  private user_protocols: string[] = ["nobras", "tcode"];
  
  private startServerAndScanForDevices() {

  }

  private async scanForDevices() {
    const options = new ButtplugWebsocketConnectorOptions();
    options.Address = "ws://localhost:12345";
    await this.client.connect(options);
    this.client.addListener("deviceadded", (device: ButtplugClientDevice) => {
      this.devices.push(device);
    });
    this.client.addListener("deviceremoved", (device) => {
      const index = this.devices.findIndex(device);
      if (index >= 0) {
        this.devices.splice(this.devices.findIndex(device), 1);
      }
    });
    await this.client.startScanning();
  }

  private addUserDeviceConfig() {

  }

  private removeUserDeviceConfig() {

  }
}
