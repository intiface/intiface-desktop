import Vue from "vue";
import * as package_info from "../../../package.json";
import { Component } from "vue-property-decorator";

@Component({})
export default class HomePanel extends Vue {

  public get Version(): string {
    return package_info.version;
  }
}
