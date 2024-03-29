import Vue from "vue";
import VueRouter from "vue-router";
import ServerPanel from "./components/ServerPanel/ServerPanel.vue";
import AboutPanel from "./components/AboutPanel/AboutPanel.vue";
import DevicesPanel from "./components/DevicesPanel/DevicesPanel.vue";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel.vue";
import SetupPanel from "./components/SetupPanel/SetupPanel.vue";
import LogPanel from "./components/LogPanel/LogPanel.vue";
import HomePanel from "./components/HomePanel/HomePanel.vue";
import HelpPanel from "./components/HelpPanel/HelpPanel.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "Home",
      component: HomePanel,
      props: true,
    },
    {
      path: "/server",
      name: "Server",
      component: ServerPanel,
      props: true,
    },
    {
      path: "/devices",
      name: "Devices",
      component: DevicesPanel,
      props: true,
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsPanel,
    },
    {
      path: "/log",
      name: "Log",
      component: LogPanel,
    },
    {
      path: "/help",
      name: "help",
      component: HelpPanel,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPanel,
    },
    {
      path: "/setup",
      name: "setup",
      component: SetupPanel,
    },
  ],
});
