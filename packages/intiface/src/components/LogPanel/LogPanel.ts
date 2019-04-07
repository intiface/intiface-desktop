import Vue from "vue";
import { Component } from "vue-property-decorator";
import { IntifaceFrontendLogger } from "intiface-core-library";

@Component({})
export default class LogPanel extends Vue {

  public mounted() {
  }

  private get Logs() {
    return IntifaceFrontendLogger.LogStore.Logs;
  }
}
