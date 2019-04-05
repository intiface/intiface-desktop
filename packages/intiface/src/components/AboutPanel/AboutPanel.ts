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
  private isCheckingForUpdates: boolean = false;
  private isDownloadingApplication: boolean = false;
  private isDownloadingEngine: boolean = false;
  private isDownloadingDeviceFile: boolean = false;
  private newApplicationDownloaded: boolean = false;

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

  public async UpdateApplication() {
    this.isDownloadingApplication = true;
    try {
      await this.connector.UpdateApplication();
      this.newApplicationDownloaded = true;
    } finally {
      this.isDownloadingApplication = false;
    }
  }

  public async UpdateDeviceFile() {
    this.isDownloadingDeviceFile = true;
    try {
      await this.connector.UpdateDeviceFile();
    } finally {
      this.isDownloadingDeviceFile = false;
    }
  }

  public async UpdateEngine() {
    this.isDownloadingEngine = true;
    try {
      await this.connector.UpdateDeviceFile();
    } finally {
      this.isDownloadingEngine = false;
    }
  }

  public async CheckForUpdates() {
    this.isCheckingForUpdates = true;
    try {
      await this.connector.CheckForUpdates();
    } finally {
      this.isCheckingForUpdates = false;
    }
  }
}
