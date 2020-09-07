import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class HelpPanel extends Vue {

  public mounted() {
    if (document.getElementById("launcher") === null) {
      const body = document.getElementsByTagName("body")[0];
      const script = document.createElement("script");
      script.setAttribute("id", "ze-snippet");
      script.setAttribute("src", "https://static.zdassets.com/ekr/snippet.js?key=aba3172c-0357-430b-889b-ee229173abf2");
      body.appendChild(script);
    } else {
      document.getElementById("launcher")!.style.display = "block";
    }
  }

  public beforeDestroy() {
    document.getElementById("launcher")!.style.display = "none";
  }

}
