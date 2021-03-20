import Vue from "vue";
import vuetify from './plugins/vuetify';
import "./plugins/vee-validate";
import App from "./App.vue";
import router from "./router";
import { buttplugInit } from "buttplug";

Vue.config.productionTip = false;

buttplugInit().then(() =>
  new Vue({
    vuetify,
    router,
    render: (h) => h(App),

    mounted() {
      // Prevent blank screen in Electron builds
      this.$router.push("/home");
    },

  }).$mount("#app")
);