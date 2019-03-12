import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import router from "../../router";
import { FrontendConnector, IntifaceConfiguration } from 'intiface-core-library';
import { IntifaceProtocols } from "intiface-protocols";

@Component({})
export default class SetupPanel extends Vue {
  private setupStep: number = 0;
  @Prop()
  private connector!: FrontendConnector;
  @Prop()
  private config!: IntifaceConfiguration;
  private engineDownloadFinished: boolean = false;
  private downloadProgress: number = 0;

  private GoToIntiface() {
    router.push("/");
  }

  private StartEngineDownload() {
    this.connector.addListener("message", this.UpdateDownloadProgress);
    const msg = IntifaceProtocols.ServerFrontendMessage.create({
      updateengine: IntifaceProtocols.ServerFrontendMessage.UpdateEngine.create(),
    });
    this.connector.SendMessage(msg);
  }

  private UpdateDownloadProgress(aMsg: IntifaceProtocols.ServerBackendMessage) {
    if (aMsg.downloadprogress !== null) {
      const msg = aMsg.downloadprogress!;
      this.downloadProgress = Math.ceil(((msg.bytesReceived!) / msg.bytesTotal!) * 100);
      if (msg.bytesReceived === msg.bytesTotal) {
        this.engineDownloadFinished = true;
        this.connector.removeListener("message", this.UpdateDownloadProgress);
      }
    }
  }
}
