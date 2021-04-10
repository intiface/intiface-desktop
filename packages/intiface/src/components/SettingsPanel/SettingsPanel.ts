import Vue from "vue";
import * as packageInfo from "../../../package.json";
import router from "../../router";
import UpdateDialog from "../UpdateDialog/UpdateDialog.vue";
import { IntifaceConfiguration, FrontendConnector } from "intiface-core-library";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    UpdateDialog,
  },
})
export default class SettingsPanel extends Vue {
  @Prop()
  private connector!: FrontendConnector;
  @Prop()
  private config!: IntifaceConfiguration;
  private isCheckingForUpdates: boolean = false;
  private dialogType: string[] = [];
  private logLevels: string[] = ["Off", "Error", "Warn", "Info", "Debug", "Trace"];
  private panelExpand: boolean[] = [];
  private panelOpen: number[] = [0, 1, 2, 3, 4];
  private factoryResetDialog: boolean = false;
  private internalInsecureWebsocketPort: number = 1;
  private internalErrors: string[] = [];

  private mounted() {
    this.UpdateRequirements();
    this.internalInsecureWebsocketPort = this.config.WebsocketServerInsecurePort;
    if (window.location.hash === "#version") {
      this.panelExpand = [true];
    }
  }

  private UpdateRequirements() {
    this.dialogType = [];
    if (this.config.ApplicationUpdateAvailable) {
      this.dialogType.push("application");
    }
    if (this.config.EngineUpdateAvailable) {
      this.dialogType.push("engine");
    }
    if (this.config.DeviceFileUpdateAvailable) {
      this.dialogType.push("devicefile");
    }
  }

  private ForceUpdate() {
    this.dialogType.push("engine");
    this.dialogType.push("devicefile");
    (this.$refs.updateDialog as any).OpenDialog();
  }

  private RunSetup() {
    router.push("setup");
  }

  private get Version(): string {
    return packageInfo.version;
  }

  private get EngineVersion(): string {
    return this.config.CurrentEngineVersion;
  }

  private get DeviceConfigFileVersion(): string {
    return this.config.CurrentDeviceFileVersion.toString(10);
  }

  private get NeedsUpdate(): boolean {
    return this.config.ApplicationUpdateAvailable ||
      this.config.EngineUpdateAvailable ||
      this.config.DeviceFileUpdateAvailable;
  }

  private async CheckForUpdates() {
    this.isCheckingForUpdates = true;
    try {
      await this.connector.CheckForUpdates();
    } finally {
      this.UpdateRequirements();
      this.isCheckingForUpdates = false;
    }
  }

  private async ResetIntiface() {
    await this.connector.ResetIntifaceConfiguration();
  }

  private get InsecureWebsocketPort(): number {
    return this.internalInsecureWebsocketPort;
  }

  private set InsecureWebsocketPort(port: number) {
    try {
      this.internalInsecureWebsocketPort = port;
      this.internalErrors = []
      this.config.WebsocketServerInsecurePort = port;
    } catch {
      // pass here, vee-validate will handle the error on the frontend.
    }
  }
}
