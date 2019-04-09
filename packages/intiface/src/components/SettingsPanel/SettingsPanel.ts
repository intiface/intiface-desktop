import Vue from "vue";
import * as packageInfo from "../../../package.json";
import router from "../../router";
import UpdateDialog from "../UpdateDialog/UpdateDialog";
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

  private mounted() {
    this.UpdateRequirements();
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
}
