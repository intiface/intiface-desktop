import Vue from "vue";
import * as packageInfo from "../../../package.json";
import { Component, Prop } from "vue-property-decorator";
import { IntifaceConfiguration, FrontendConnector } from "intiface-core-library";

@Component({})
export default class AboutPanel extends Vue {
  @Prop()
  private config!: IntifaceConfiguration;
  @Prop()
  private connector!: FrontendConnector;

  public get Version(): string {
    return packageInfo.version;
  }

  public get EngineVersion(): string {
    return this.config.CurrentEngineVersion;
  }

  public get DeviceConfigFileVersion(): string {
    return this.config.CurrentDeviceFileVersion.toString(10);
  }

  public get NeedsApplicationUpdate(): boolean {
    return this.config.ApplicationUpdateAvailable;
  }

  public get NeedsEngineUpdate(): boolean {
    return this.config.EngineUpdateAvailable;
  }

  public get NeedsDeviceFileUpdate(): boolean {
    return this.config.DeviceFileUpdateAvailable;
  }

  public UpdateApplication() {
    this.connector.UpdateApplication();
  }

  public UpdateDeviceFile() {
    this.connector.UpdateDeviceFile();
  }

  public UpdateEngine() {
    this.connector.UpdateEngine();
  }

  public CheckForUpdates() {
    this.connector.CheckForUpdates();
  }
}
