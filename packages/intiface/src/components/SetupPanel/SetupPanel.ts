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

  private downloadStarted: boolean = false;
  private downloadFinished: boolean = false;

  private downloadFinishedResolver: (() => void) | null = null;

  private GoToIntiface() {
    this.config.HasRunSetup = true;
    router.push("/");
  }

  private async RunDownloads() {
    this.downloadStarted = true;
    this.connector.addListener("message", this.UpdateDownloadProgress);

    let [p, res] = IntifaceUtils.MakePromise();
    this.downloadFinishedResolver = res;
    this.StartEngineDownload();
    await p;

    [p, res] = IntifaceUtils.MakePromise();
    this.downloadFinishedResolver = res;
    this.StartDeviceFileDownload();
    await p;

    this.connector.removeListener("message", this.UpdateDownloadProgress);

    this.downloadFinished = true;
    this.downloadFinishedResolver = null;
  }

  private StartEngineDownload() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateEngine: IntifaceProtocols.IntifaceFrontendMessage.UpdateEngine.create(),
    });
    this.connector.SendMessage(msg);
  }

  private StartDeviceFileDownload() {
    const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      updateDeviceFile: IntifaceProtocols.IntifaceFrontendMessage.UpdateDeviceFile.create(),
    });
    this.connector.SendMessage(msg);
  }

  private UpdateDownloadProgress(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    if (aMsg.downloadProgress !== null) {
      const msg = aMsg.downloadProgress!;
      this.downloadProgress = Math.ceil(((msg.bytesReceived!) / msg.bytesTotal!) * 100);
      if (msg.bytesReceived === msg.bytesTotal) {
        if (this.downloadFinishedResolver !== null) {
          this.downloadFinishedResolver();
        }
      }
    }
  }

  private async StartCertServer() {
    const [p, res] = IntifaceUtils.MakePromise();
    this.connector.addListener("message", (aMsg: IntifaceProtocols.IntifaceBackendMessage) => {
      if (aMsg.certificateGenerated) {
        res();
      }
    });
    let msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      generateCertificate: IntifaceProtocols.IntifaceFrontendMessage.GenerateCertificate.create(),
    });
    this.connector.SendMessage(msg);
    await p;
    msg = IntifaceProtocols.IntifaceFrontendMessage.create({
      runCertificateAcceptanceServer: IntifaceProtocols.IntifaceFrontendMessage.RunCertificateAcceptanceServer.create(),
    });
    this.connector.SendMessage(msg);
  }
}
