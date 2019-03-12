import Vue from "vue";
import router from "../../router";
import { IntifaceConfiguration } from "intiface-core-library";
import { Component } from "vue-property-decorator";

@Component({})
export default class SettingsPanel extends Vue {

  private config!: IntifaceConfiguration;

  private RunSetup() {
    router.push("setup");
  }
}
