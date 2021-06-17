import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IntifaceFrontendLogger, FrontendConnector } from "intiface-core-library";

@Component({})
export default class LogPanel extends Vue {
  @Prop()
  private connector!: FrontendConnector;

  public mounted() {
    // Scroll to bottom (newest) when panel is brought up.
    const el = document.getElementById("logContainer")!;
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }

  private get Logs() {
    return IntifaceFrontendLogger.Logs();
  }

  private clearLog() {

  }

  private openLogDirectory() {
    this.connector.OpenLogDirectory();
  }
}
