import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IntifaceConfiguration } from "intiface-core-library";

@Component({})
export default class ServerPanel extends Vue {

  @Prop()
  private config!: IntifaceConfiguration;
  private inSimpleMode: boolean = true;
  private serverRunning: boolean = false;
  private serverStates: string[] = ["Start Server", "Stop Server"];

  private ToggleServer() {
    this.serverRunning = !this.serverRunning;
    // this.serverRunning ? this.$emit("startserver") : this.$emit("stopserver");
  }

  // TODO Pipe name validator

  // TODO Websocket address validator
}
