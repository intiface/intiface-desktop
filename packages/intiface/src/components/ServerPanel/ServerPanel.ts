import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ServerPanel extends Vue {
  mounted() {
    console.log("Mounted server panel");
  }
}

