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

  private mounted() {
    this.UpdateRequirements();
  }

  private UpdateRequirements() {
    const updateTypes = [];
    if (this.config.ApplicationUpdateAvailable) {
      updateTypes.push("application");
    }
    if (this.config.EngineUpdateAvailable) {
      updateTypes.push("engine");
    }
    if (this.config.DeviceFileUpdateAvailable) {
      updateTypes.push("devicefile");
    }
    (this.$refs.UpdateDialog as any).dialogType = updateTypes;
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
