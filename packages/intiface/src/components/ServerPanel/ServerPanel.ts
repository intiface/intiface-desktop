import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ServerPanel extends Vue {

  private useIPC: boolean = false;
  private serverRunning: boolean = false;
  private useWebsockets: boolean = false;
  private pipeName: string = "ButtplugPipe";
  private serverStates: string[] = ["Start Server", "Stop Server"];

  private ToggleServer() {
    this.serverRunning = !this.serverRunning;
    this.serverRunning ? this.$emit("startserver") : this.$emit("stopserver");
  }

  // TODO Pipe name validator

  // TODO Websocket address validator
}

