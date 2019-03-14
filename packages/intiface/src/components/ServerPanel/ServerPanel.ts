import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IntifaceConfiguration, FrontendConnector } from "intiface-core-library";
import { IntifaceProtocols } from "intiface-protocols";

@Component({})
export default class ServerPanel extends Vue {

  @Prop()
  private config!: IntifaceConfiguration;

  @Prop()
  private connector!: FrontendConnector;
  private inSimpleMode: boolean = true;
  private serverRunning: boolean = false;
  private serverStates: string[] = ["Start Server", "Stop Server"];

  private ToggleServer() {
    this.serverRunning = !this.serverRunning;
    if (this.serverRunning) {
      const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
        startProcess: IntifaceProtocols.IntifaceFrontendMessage.StartProcess.create(),
      });
      this.connector.SendMessage(msg);
    } else {
      const msg = IntifaceProtocols.IntifaceFrontendMessage.create({
        stopProcess: IntifaceProtocols.IntifaceFrontendMessage.StopProcess.create(),
      });
      this.connector.SendMessage(msg);
    }
  }

  // TODO Pipe name validator

  // TODO Websocket address validator
}
