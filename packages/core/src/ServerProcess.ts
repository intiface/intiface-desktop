import * as net from "net";
import * as child_process from "child_process";

import { IntifaceProtocols } from "intiface-protocols";
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
  private _serverProcess: child_process.ChildProcess;

  // If we need to front the ipc server with our own websocket server, we'll
  // still need an IPC client to the server which we'll proxy through our own
  // websocket. Mmmm, overly complicated.
  private _ipcClient: net.Socket;

  public constructor() {
    super();
    process.on('SIGTERM', () => {
      this.ShutdownServer();
    });
  }

  public RunServer() {
    // First, we set up our incoming pipe to receive GUI info from the CLI
    // process
    const pipe = "\0ButtplugPipe";
    this._frontendServer = net.createServer();
    this._frontendServer.addListener("connection", (s) => {
      this._frontendSocket = s;
      this._frontendSocket.addListener("data", (d) => {
        this.ParseMessage(d);
      });
    });
    // TODO Should probably await this?
    this._frontendServer.listen(pipe);
    // Now we start up our external process.
    this._serverProcess = child_process.execFile("node", ["/home/qdot/code/git-projects/intiface-desktop/packages/test-process/index.js"]);
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
    const msg = IntifaceProtocols.ServerProcessMessage.decode(aData);
    if (msg.processended !== null) {
      // Process will not send messages after this, shut down listener. This is
      // the only type of message the server currently needs to care about.
      this.ShutdownServer();
    }
    console.log(msg);
    this.emit("processmessage", msg);
  }
}
