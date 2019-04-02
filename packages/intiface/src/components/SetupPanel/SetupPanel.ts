import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import router from "../../router";
import { FrontendConnector, IntifaceConfiguration, IntifaceUtils } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";

@Component({})
export default class SetupPanel extends Vue {
  private setupStep: number = 0;
  @Prop()
  private connector!: FrontendConnector;
  @Prop()
  private config!: IntifaceConfiguration;
  private downloadProgress: number = 0;

  private downloadMessage: string = "Downloading Device File...";
  private downloadStarted: boolean = false;
  private downloadFinished: boolean = false;

  private downloadFinishedResolver: (() => void) | null = null;

  private GoToIntiface() {
    this.config.HasRunSetup = true;
    router.push("/");
  }

  private async RunDownloads() {
    this.downloadStarted = true;
    this.connector.addListener("progress", this.UpdateDownloadProgress);

    await this.DownloadDeviceFile();
    this.downloadMessage = "Downloading and Installing Engine...";
    this.downloadProgress = 0;
    await this.DownloadEngine();

    this.connector.removeListener("progress", this.UpdateDownloadProgress);

    this.downloadFinished = true;
    this.downloadFinishedResolver = null;
  }

  private async DownloadEngine() {
    await this.connector.UpdateEngine();
  }

  private async DownloadDeviceFile() {
    await this.connector.UpdateDeviceFile();
  }

  private UpdateDownloadProgress(aMsg: IntifaceProtocols.IntifaceBackendMessage.DownloadProgress) {
    this.downloadProgress = Math.ceil(((aMsg.bytesReceived!) / aMsg.bytesTotal!) * 100);
    if (aMsg.bytesReceived === aMsg.bytesTotal) {
      if (this.downloadFinishedResolver !== null) {
        this.downloadFinishedResolver();
      }
    }
  }

  private async StartCertServer() {
    await this.connector.GenerateCertificate();
    await this.connector.RunCertificateAcceptanceServer();
  }
}
