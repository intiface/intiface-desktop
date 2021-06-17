import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IntifaceProtocols } from "intiface-protocols";
import { IntifaceConfiguration, FrontendConnector } from "intiface-core-library";

@Component({
  name: "ServerPanel",
})
export default class ServerPanel extends Vue {

  @Prop()
  private config!: IntifaceConfiguration;

  @Prop()
  private connector!: FrontendConnector;
  private serverStates: string[] = ["Start Server", "Stop Server"];

  private mounted() {
    this.connector.addListener("message", (msg: IntifaceProtocols.IntifaceBackendMessage) => this.ParseMessage(msg));
  }

  private ParseMessage(msg: IntifaceProtocols.IntifaceBackendMessage) {
    if (msg.processError) {
      this.$emit("error", msg.processError.reason);
    }
  }

  private get serverRunning() {
    return this.connector.IsServerProcessRunning;
  }

  private async ToggleServer() {
    try {
      if (!this.connector.IsServerProcessRunning) {
        await this.connector.StartProcess();
      } else {
        await this.connector.StopProcess();
      }
    } catch (e) {
      this.$emit("error", e);
    }
  }

  private isWindows() {
    return navigator.appVersion.indexOf('Windows') != -1;
  }
}