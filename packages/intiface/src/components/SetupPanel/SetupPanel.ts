import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import UpdateDialog from "../UpdateDialog/UpdateDialog.vue";
import router from "../../router";
import { FrontendConnector, IntifaceConfiguration, IntifaceUtils } from "intiface-core-library";

@Component({
  components: {
    UpdateDialog,
  },
})
export default class SetupPanel extends Vue {
  private setupStep: number = 1;
  private updateFinished: boolean = false;
  private usingFirefox: boolean = false;
  private certAcceptDialog: boolean = false;
  @Prop()
  private connector!: FrontendConnector;
  @Prop()
  private config!: IntifaceConfiguration;

  private GoToIntiface() {
    this.config.HasRunSetup = true;
    router.push("home");
  }

  private async StartCertServer() {
    if (!this.config.HasCertificates) {
      await this.connector.GenerateCertificate();
    }
    let maybe_port = await this.connector.RunCertificateAcceptanceServer();
    if (maybe_port.certificateAcceptanceServerRunning) {
      let port = maybe_port.certificateAcceptanceServerRunning!.insecurePort!;
      window.open(`http://127.0.0.1:${port}`, "_blank");
    }  
  }

  private async StopCertServer() {
    await this.connector.StopCertificateAcceptanceServer();
    this.certAcceptDialog = false;
  }
}
