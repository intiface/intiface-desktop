import Vue from "vue";
import { IpcMain, ipcRenderer } from "electron";
import { ServerFrontendMessage } from "intiface-protocols";
import { Component, Watch } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class App extends Vue {
  /////////////////////////////////////
  // Component and UI methods
  /////////////////////////////////////

  public mounted() {
  }

  public sendMessage() {
    let msg = new ServerFrontendMessage();
    msg.setStartprocess(new ServerFrontendMessage.StartProcess());
    ipcRenderer.send("frontend", msg.serializeBinary());
  }
}
