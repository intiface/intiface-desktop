import Vue from "vue";
import router from "../../router";
import { IntifaceConfiguration } from "intiface-core-library";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class SettingsPanel extends Vue {

  @Prop()
  private config!: IntifaceConfiguration;

  private RunSetup() {
    router.push("setup");
  }
}
