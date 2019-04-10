import Vue from "vue";
import router from "./router";
import { IntifaceProtocols } from "intiface-protocols";
import { Component, Watch, Prop } from "vue-property-decorator";
import { FrontendConnector, IntifaceFrontendLogger, IntifaceConfiguration } from "intiface-core-library";
import ToolbarStatusIcon from "./components/ToolbarStatusIcon/ToolbarStatusIcon";
import * as winston from "winston";

@Component({
  components: {
    ToolbarStatusIcon,
  },
})
export default class App extends Vue {
  private connector: FrontendConnector | null = null;
  private menuList = [
    { title: "Server Status", icon: "cloud_circle", path: "/" },
    // TODO Actually implement these panels
    // { title: "Proxy", icon: "settings_cell", path: "proxy" },
    // { title: "Devices", icon: "device_hub", path: "devices" },
    { title: "Settings", icon: "settings", path: "settings" },
    { title: "Log", icon: "receipt", path: "log" },
    { title: "About", icon: "info", path: "about" },
  ];
  private config!: IntifaceConfiguration;
  private showNavBar: boolean = true;
  private currentItem = this.menuList[0];
  private mini = true;
  private drawer = true;
  private loaded = false;
  private appErrors: string[] = [];
  private logger!: winston.Logger;

  /////////////////////////////////////
  // Component and UI methods
  /////////////////////////////////////

  public async mounted() {
    // IMPORTANT NOTE
    //
    // WEBPACK_ELECTRON is a webpack define plugin definition. Treat this
    // if/else block as you would a #ifdef/#else in C.
    if (WEBPACK_ELECTRON) {
      const mod = await import("./utils/ElectronFrontendConnector");
      this.connector = await mod.ElectronFrontendConnector.Create();
      this.loaded = true;
    } else {
      if (this.$route.query.websocket) {
        // const mod = await import("./utils/WebsocketFrontendConnector");
        // this.connector = new mod.WebsocketFrontendConnector();
      } else {
        // TODO Create dummy/test connector for instances where we don"t have a
        // websocket to connect to.
        console.log("NO CONNECTOR");
      }
    }
    this.config = this.connector!.Config!;
    this.logger = IntifaceFrontendLogger.GetChildLogger(this.constructor.name);
    this.logger.info("Intiface desktop application frontend mounted");
    this.checkSetup();
  }

  private checkSetup() {
    if (!this.connector!.Config!.HasRunSetup) {
      this.logger.info("HasRunSetup is false, running first time experience flow.");
      this.currentItem = { title: "Initial Setup", icon: "", path: "setup" };
      router.push("setup");
    }
  }

  private onError(aMsg: string) {
    this.appErrors.push(aMsg);
  }

  // Not actually sure what the incoming type of the router value is, and we
  // really just need to know the name, so make a corresponding shape.
  @Watch("$route", { immediate: true, deep: true })
  private toggleNav(newVal: { name: string }) {
    this.showNavBar = newVal.name !== "setup";
  }
}
