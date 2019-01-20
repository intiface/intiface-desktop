import * as net from "net";
import * as protobuf from "protobufjs";

// Handles execution and lifetime of server processes, as well as translation of
// the protobuf protocol.
//
// Events (incoming ProtoBuf messages):
// - processstarted
// - processended
// - buttpluglog
// - guilog
// - clientconnected
// - clientdisconnected
// - deviceconnected
// - devicedisconnected
export class ServerProcess {

  private _msgType: protobuf.Type;
  private _guiServer: net.Server;
  // If we need to front the ipc server with our own websocket server, we'll
  // still need an IPC client to the server which we'll proxy through our own
  // websocket. Mmmm, overly complicated.
  private _ipcClient: net.Socket;

  public constructor()
  {
    let pb = protobuf.loadSync("./src/buttplug-gui.proto");
    this._msgType = pb.lookupType("GuiMessage");
    let pipe = "//./pipe/ButtplugPipe";
    let stream = net.createServer();
    stream.addListener("connection", (s) => {
      s.addListener("data", (d) => {
        this.parseMessage(d);
      });
    });
    stream.listen(pipe);
  }

  public RunServer() {
  }

  public StopServer() {
  }

  private parseMessage(aData: Buffer) {
    this._msgType.verify(aData);
    let msg = this._msgType.toObject(this._msgType.decode(aData));
  }
}
