import { BackendConnector } from "./BackendConnector";
import { IntifaceProtocols } from "intiface-protocols";
import { ServerProcess } from "./ServerProcess";
import { IntifaceConfigurationManager } from "./IntifaceConfigurationManager";
import { IntifaceConfigurationFileManager } from "./IntifaceConfigurationFileManager";
import { GithubReleaseManager } from "./GithubReleaseManager";
import { CertGenerator } from "./CertGenerator";
import { IntifaceUtils } from "./Utils";

// The link between whatever our frontend is (Electron, express, etc) and our
// Buttplug server process. This will handle loading/saving our configuration
// file, bringing up/shutting down processes, etc...
//
// This module will need to exist in whatever the parent process of our setup
// is, i.e. the process that can actually touch files and network. It will
// communicate with the GUI via a specialized FrondendConnector class.
export class ButtplugProcessManager {

  public static async Create(aConnector: BackendConnector): Promise<ButtplugProcessManager> {
    const config = await IntifaceConfigurationFileManager.Create();
    return new ButtplugProcessManager(aConnector, config);
  }

  private _connector: BackendConnector;
  private _process: ServerProcess | null;
  private _configManager: IntifaceConfigurationManager;

  protected constructor(aConnector: BackendConnector, aConfig: IntifaceConfigurationFileManager) {
    this._connector = aConnector;
    this._configManager = aConfig;
    // TODO This isn't really handled if something goes wrong. We should at
    // least catch and log.
    this._connector.addListener("message", async (msg) => await this.ReceiveFrontendMessage(msg));
  }

  public async Shutdown() {
    if (this._process !== null) {
      await this._process.StopServer();
      this._process = null;
    }
  }

  private UpdateDownloadProgress(aProgress: any) {
    const msg = IntifaceProtocols.IntifaceBackendMessage.create({
      downloadProgress: IntifaceProtocols.IntifaceBackendMessage.DownloadProgress.create({
        bytesReceived: aProgress.receivedBytes,
        bytesTotal: aProgress.totalBytes,
      }),
    });
    this._connector.SendMessage(msg);
  }

  private UpdateFrontendConfiguration() {
      const msg = IntifaceProtocols.IntifaceBackendMessage.create({
        configuration: IntifaceProtocols.IntifaceBackendMessage.Configuration.create({
          configuration: JSON.stringify(this._configManager.Config),
        }),
      });
      this._connector.SendMessage(msg);
  }

  private async ReceiveFrontendMessage(aMsg: IntifaceProtocols.IntifaceFrontendMessage) {
    // TODO Feels like there should be a better way to do this :c
    if (aMsg.startProcess !== null) {
      this._process = new ServerProcess(this._configManager.Config);
      this._process.addListener("process_message", (aProcessMsg: IntifaceProtocols.IntifaceBackendMessage) => {
        this._connector.SendMessage(aProcessMsg);
      });
      this._process.addListener("exit", () => {
        const stopMsg = IntifaceProtocols.IntifaceBackendMessage.create({
          serverProcessMessage: IntifaceProtocols.ServerProcessMessage.create({
            processEnded: IntifaceProtocols.ServerProcessMessage.ProcessEnded.create(),
          }),
        });
        this._connector.SendMessage(stopMsg);
        this._process = null;
      });
      await this._process.RunServer();
    } else if (aMsg.stopProcess !== null) {
      if (this._process) {
        // This will fire the exit event, which will set the process to null and
        // update the frontend.
        await this._process.StopServer();
      }
    } else if (aMsg.startProxy !== null) {
      // TODO Fill in once proxy is done
    } else if (aMsg.ready !== null) {
      this.UpdateFrontendConfiguration();
    } else if (aMsg.updateConfig !== null) {
      this._configManager.Config.Load(JSON.parse(aMsg.updateConfig!.configuration!));
      this._configManager.Save();
    } else if (aMsg.updateEngine !== null) {
      const ghManager = new GithubReleaseManager(this._configManager.Config);
      ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
      await ghManager.DownloadLatestEngineVersion();
      ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
      // Once we're done with a download, make sure to save our config and
      // update our frontend.
      this.UpdateFrontendConfiguration();
    } else if (aMsg.updateDeviceFile !== null) {
      const ghManager = new GithubReleaseManager(this._configManager.Config);
      ghManager.addListener("progress", this.UpdateDownloadProgress.bind(this));
      await ghManager.DownloadLatestDeviceFileVersion();
      ghManager.removeListener("progress", this.UpdateDownloadProgress.bind(this));
      // Once we're done with a download, make sure to save our config and
      // update our frontend.
      await this._configManager!.Save();
      this.UpdateFrontendConfiguration();
    } else if (aMsg.generateCertificate !== null) {
      const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory, this._configManager.Config);
      if (!(await cg.HasGeneratedCerts())) {
        await cg.GenerateCerts();
      }
      this._connector.SendMessage(IntifaceProtocols.IntifaceBackendMessage.create({
        certificateGenerated: IntifaceProtocols.IntifaceBackendMessage.CertificateGenerated.create(),
      }));
    } else if (aMsg.runCertificateAcceptanceServer !== null) {
      const cg = new CertGenerator(IntifaceUtils.UserConfigDirectory, this._configManager.Config);
      if (!(await cg.HasGeneratedCerts())) {
        // TODO Should probably error here
        return;
      }
      await cg.RunCertAcceptanceServer();
      const msg = IntifaceProtocols.IntifaceBackendMessage.create({
        certificateAcceptanceServerRunning:
        IntifaceProtocols.IntifaceBackendMessage.CertificateAcceptanceServerRunning.create({
          insecurePort: cg.InsecurePort,
        }),
      });
      this._connector.SendMessage(msg);
    } else {
      console.log(`Message has no usable payload! ${aMsg}`);
    }
  }
}
