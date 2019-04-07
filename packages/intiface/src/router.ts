import Vue from "vue";
import Router from "vue-router";
import ServerPanel from "./components/ServerPanel/ServerPanel";
import AboutPanel from "./components/AboutPanel/AboutPanel";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import SetupPanel from "./components/SetupPanel/SetupPanel";
import LogPanel from "./components/LogPanel/LogPanel";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Server",
      component: ServerPanel,
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
