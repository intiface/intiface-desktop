import Vue from "vue";
import { IpcMain, ipcRenderer } from "electron";
import { ServerFrontendMessage, ServerProcessMessage } from "intiface-protocols";
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
    ipcRenderer.addListener("process", (event: string, args: Buffer) => {
      console.log(ServerProcessMessage.deserializeBinary(args).toObject());
    });
  }

  public sendMessage() {
    let msg = new ServerFrontendMessage();
    msg.setStartprocess(new ServerFrontendMessage.StartProcess());
    ipcRenderer.send("frontend", msg.serializeBinary());
  }
}
