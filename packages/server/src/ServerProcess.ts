import * as net from "net";
import * as MessageTypes from "intiface-protocols";
import { EventEmitter } from "events";

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
export class ServerProcess extends EventEmitter {

  // IPC pipe for relaying server process status out to the frontend.
  private _frontendServer: net.Server | null = null;
  private _frontendSocket: net.Socket | null = null;

  // If we need to front the ipc server with our own websocket server, we'll
  // still need an IPC client to the server which we'll proxy through our own
  // websocket. Mmmm, overly complicated.
  private _ipcClient: net.Socket;

  public constructor()
  {
    super();
    process.on('SIGTERM', () => {
      this.ShutdownServer();
    });
  }

  public RunServer() {
    // First, we set up our incoming pipe to receive GUI info from the CLI
    // process
    let pipe = "\0ButtplugPipe";
    this._frontendServer = net.createServer();
    this._frontendServer.addListener("connection", (s) => {
      console.log("GOT CONNECTION");
      this._frontendSocket = s;
      this._frontendSocket.addListener("data", (d) => {
        console.log("GOT MESSAGE");
        this.ParseMessage(d);
      });
    });
    // TODO Should probably await this?
    this._frontendServer.listen(pipe);

    // Now we start up our external process.
  }

  public StopServer() {
    // TODO Send "quit" message to process, it should send "ProcessEnded" back,
    // at which point we'll actually terminate.
  }

  private ShutdownServer() {
    // TODO Should probably await this?
    if (this._frontendSocket !== null) {
      this._frontendSocket.end();
    }
    if (this._frontendServer !== null) {
      this._frontendServer.close();
      this._frontendServer = null;
    }
    // TODO Check to see if process is still alive, if it is, wait for shutdown.
  }

  private ParseMessage(aData: Buffer) {
    // TODO Sucks that we'll have to parse this twice, once here and once in the
    // frontend. Not sure how to serialize to frontend and not lose typing tho.
    let msg = MessageTypes.ServerProcessMessage.deserializeBinary(aData);
    if (msg.hasProcessended) {
      // Process will not send messages after this, shut down listener. This is
      // the only type of message the server currently needs to care about.
      this.ShutdownServer();
    }
    console.log(msg.toObject());
    this.emit("processmessage", aData);
  }
}
