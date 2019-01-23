import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ServerPanel extends Vue {

  private useIPC: boolean = false;
  private serverRunning: boolean = false;
  private useWebsockets: boolean = false;
  private pipeName: string = "ButtplugPipe";

  mounted() {
    console.log("Mounted server panel");
  }

  // TODO Pipe name validator

  // TODO Websocket address validator
}

