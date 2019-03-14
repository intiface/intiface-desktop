import { BackendConnector, FrontendConnector } from "../src";
import { EventEmitter } from "events";
import { IntifaceProtocols } from "intiface-protocols";

describe("Connector tests", async () => {

  // Simulates whatever our frontend/backend connector is (ipcMain/ipcRender for
  // electron, websocket server for express, etc...)
  class TestConnectorHub extends EventEmitter {
    public SendBackendMessage(aMsg: Buffer) {
      this.emit("backend", aMsg);
    }

    public SendFrontendMessage(aMsg: Buffer) {
      this.emit("frontend", aMsg);
    }
  }

  let _hub: TestConnectorHub;

  class TestBackendConnector extends BackendConnector {
    private _localHub: TestConnectorHub;

    public constructor(aHub: TestConnectorHub) {
      super();
      this._localHub = aHub;
      this._localHub.addListener("frontend", (aMsg: Buffer) => {
        const msg = IntifaceProtocols.IntifaceFrontendMessage.decode(aMsg);
        this.ProcessMessage(msg);
      });
    }

    public SendMessageInternal(aMsg: Buffer) {
      this._localHub.SendBackendMessage(aMsg);
    }
  }

  class TestFrontendConnector extends FrontendConnector {
    public static Create(aHub: TestConnectorHub): TestFrontendConnector {
      const connector = new TestFrontendConnector(aHub);
      connector.Ready();
      return connector;
    }

    private _localHub: TestConnectorHub;

    protected constructor(aHub: TestConnectorHub) {
      super();
      this._localHub = aHub;
    }

    public SendMessageInternal(aMsg: Buffer) {
      this._localHub.SendFrontendMessage(aMsg);
    }
  }

  beforeEach(() => {
    _hub = new TestConnectorHub();
  });

  it("Should send Ready from Backend to Frontend when frontend is created", async () => {
    const backend = new TestBackendConnector(_hub);
    let res;
    const p = new Promise((rs) => { res = rs; });
    backend.addListener("message", (aMsg: IntifaceProtocols.IntifaceFrontendMessage) => {
      expect(aMsg.ready).toBeDefined();
      res();
    });
    const frontend = TestFrontendConnector.Create(_hub);
    await p;
  });
});
