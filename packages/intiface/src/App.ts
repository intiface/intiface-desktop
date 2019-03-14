import Vue from "vue";
import router from "./router";
import { IntifaceProtocols } from "intiface-protocols";
import { Component, Watch, Prop } from "vue-property-decorator";
import { FrontendConnector } from "intiface-core-library";

@Component({
  components: {
  },
})
export default class App extends Vue {
  private connector: FrontendConnector | null = null;
  private menuList = [
    { title: "Server", icon: "cloud_circle", path: "server" },
    { title: "Proxy", icon: "settings_cell", path: "proxy" },
    { title: "Devices", icon: "device_hub", path: "devices" },
    { title: "Settings", icon: "settings", path: "settings" },
    { title: "About", icon: "info", path: "about" },
  ];
  private showNavBar: boolean = true;
  private currentItem = this.menuList[0];
  private mini = true;
  private drawer = true;
  private loaded = false;

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
      this.connector = mod.ElectronFrontendConnector.Create();
      this.connector.addListener("message", () => {
        this.loaded = true;
      });
    } else {
      if (this.$route.query.websocket) {
        const mod = await import("./utils/WebsocketFrontendConnector");
        this.connector = new mod.WebsocketFrontendConnector();
      } else {
        // TODO Create dummy/test connector for instances where we don"t have a
        // websocket to connect to.
        console.log("NO CONNECTOR");
      }
    }
    this.connector!.addListener("message", this.checkSetup);
  }

  private checkSetup(aMsg: IntifaceProtocols.IntifaceBackendMessage) {
    if (aMsg.configuration !== null) {
      this.connector!.removeListener("message", this.checkSetup);
      if (this.connector!.Config !== null && !this.connector!.Config!.HasRunSetup) {
        this.currentItem = { title: "Initial Setup", icon: "", path: "setup" };
        router.push("setup");
      }
    }
  }

  // Not actually sure what the incoming type of the router value is, and we
  // really just need to know the name, so make a corresponding shape.
  @Watch("$route", { immediate: true, deep: true })
  private toggleNav(newVal: { name: string }) {
    this.showNavBar = newVal.name !== "setup";
  }
}
