import Vue from "vue";
import vuetify from './plugins/vuetify';
import "./plugins/vee-validate";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  
  mounted() {
    // Prevent blank screen in Electron builds
    //this.$router.push("/");
  },
  
}).$mount("#app");

