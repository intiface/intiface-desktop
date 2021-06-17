import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { FrontendConnector, IntifaceFrontendLogger } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";

@Component({})
export default class UpdateDialog extends Vue {
  @Prop()
  private connector!: FrontendConnector;

  @Prop()
  private dialogType!: string[];

  @Prop({ default: "Get Updates"})
  private buttonText!: string;

  private dialogName: string = "";
  private dialogVerb: string = "Updating";

  private showDialog: boolean = false;
  private isApplicationUpdate: boolean = false;
  private installationProgress: number = 0;
  private installationStep: string = "Downloading update...";
  private isDownloading: boolean = false;
  private newApplicationDownloaded: boolean = false;

  @Watch("showDialog")
  public async Update() {
    if (!this.showDialog) {
      return;
    }
    this.dialogVerb = "Updating";
    this.isDownloading = true;
    try {
      const dialogTypes: Set<string> = new Set(this.dialogType);
      this.connector.addListener("progress", this.UpdateDownloadProgress);
      if (dialogTypes.has("engine")) {
        dialogTypes.delete("engine");
        this.dialogName = "Engine";
        await this.connector.UpdateEngine();
      }
      if (dialogTypes.has("devicefile")) {
        dialogTypes.delete("devicefile");
        this.dialogName = "Device File";
        await this.connector.UpdateDeviceFile();
      }
      if (dialogTypes.has("application")) {
        dialogTypes.delete("application");
        this.dialogName = "Application";
        this.isApplicationUpdate = true;
      }
      if (dialogTypes.size > 0) {
        IntifaceFrontendLogger.Logger.warn(`Unused dialog types: ${Array.from(dialogTypes.values())}`);
      }
      this.$emit("success");
    } finally {
      this.connector.removeListener("progress", this.UpdateDownloadProgress);
      this.isDownloading = false;
      if (!this.isApplicationUpdate) {
        this.dialogVerb = "Finished Updating";
      } else {
        this.dialogVerb = "Application Update Required";
      }
      this.dialogName = "";
      this.installationProgress = 0;
      // TODO Emit on download success
      this.$emit("finished");
    }
  }

  public OpenDialog() {
    this.showDialog = true;
  }

  private CloseDialog() {
    this.installationProgress = 0;
    this.showDialog = false;
  }

  private async CancelUpdate() {
    await this.connector.CancelUpdate();
    this.connector.removeListener("progress", this.UpdateDownloadProgress);
    this.isDownloading = false;
    this.CloseDialog();
    this.$emit("cancelled");
  }

  private UpdateDownloadProgress(aMsg: IntifaceProtocols.IntifaceBackendMessage.DownloadProgress) {
    this.installationProgress = Math.ceil(((aMsg.bytesReceived!) / aMsg.bytesTotal!) * 100);
  }
}
