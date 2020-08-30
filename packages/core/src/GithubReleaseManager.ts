import * as child_process from "child_process";
import { Octokit } from "@octokit/rest";
import * as os from "os";
import * as fs from "fs";
import * as semver from "semver";
import * as path from "path";
import * as unzipper from "unzipper";
import * as rimraf from "rimraf";
import * as request from "request";
import { promisify } from "util";
import { IntifaceUtils } from "./Utils";
import { EventEmitter } from "events";
import { IntifaceConfiguration, EngineType } from "./IntifaceConfiguration";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import * as winston from "winston";
import { ServerProcess } from "./ServerProcess";

// Octokit goes kinda crazy with their asset types, but doesn't have a general
// interface or type for them. We usually only need filenames and download URLs,
// so this is sort of a "Good enough" type shape.
interface ISimplifiedOctokitAsset {
  name: string;
  browser_download_url: string;
}

export class GithubReleaseManager extends EventEmitter {
  private static ENGINE_PREFIX = "intiface-cli";
  private static BUTTPLUG_REPO_OWNER = "buttplugio";
  private static INTIFACE_REPO_OWNER = "intiface";
  private static PRERELEASE_TAG = "420.69.666";
  private static DEVICE_CONFIG_REPO = "buttplug-device-config";

  private _client: Octokit = new Octokit();
  private _logger: winston.Logger;

  // This could be either "intiface-node" or "intiface-csharp" but it's hard to
  // restrict the type, since we'll be loading it out of a file.
  private _request: request.Request | null = null;
  private _engine: EngineType = "csharp";
  private readonly _config: IntifaceConfiguration;
  private _installerProcess: child_process.ChildProcess | null = null;

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._logger = IntifaceBackendLogger.GetChildLogger(this.constructor.name);
    this._logger.debug("Constructing Github Release Manager");
    this._config = aConfig;
    this._engine = aConfig.Engine;
  }

  //
  // Device File Downloading
  //

  public async CheckForNewDeviceFileVersion(): Promise<boolean> {
    this._logger.debug("Checking for new device file version");
    // If we don't have one yet, then obviously we need a new one.
    if (this._config.CurrentDeviceFileVersion === 0) {
      this._logger.debug("No device file version available, assuming initial download.");
      return true;
    }

    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.BUTTPLUG_REPO_OWNER,
                                                                    repo: GithubReleaseManager.DEVICE_CONFIG_REPO });
    // Device versions are in the form "vX" (because tagging with just a number
    // can get gross), so we want to process everything after the v and see if
    // it's newer than what we've got.
    const releaseVersion = parseInt(releaseInfo.data.tag_name.substr(1), 10);
    this._logger.debug(`Current device file version: ${this._config.CurrentDeviceFileVersion}`);
    this._logger.debug(`Latest device file version: ${releaseVersion}`);
    return releaseVersion > this._config.CurrentDeviceFileVersion;
  }

  public async DownloadLatestDeviceFileVersion(): Promise<void> {
    this._logger.debug("Downloading latest device file version");
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.BUTTPLUG_REPO_OWNER,
                                                                    repo: GithubReleaseManager.DEVICE_CONFIG_REPO });
    let downloadUrl: string | null = null;
    for (const asset of releaseInfo.data.assets) {
      if (asset.name === IntifaceUtils.DEVICE_CONFIG_FILENAME) {
        downloadUrl = asset.browser_download_url;
        break;
      }
    }
    if (downloadUrl === null) {
      throw new Error("Cannot find device configuration asset to download!");
    }
    this._logger.debug(`Downloading device file from ${downloadUrl}`);
    await this.DownloadFile(downloadUrl, IntifaceUtils.DeviceConfigFilePath);
    this._logger.debug(`Stored device file to ${IntifaceUtils.DeviceConfigFilePath}`);
    this._config.CurrentDeviceFileVersion = parseInt(releaseInfo.data.tag_name.substr(1), 10);
  }

  //
  // Engine Downloading
  //

  public get EngineFilenamePrefix(): string {
    // TODO: Do we need to worry about 32-bit platforms?

    // TODO: Gonna need an armv6 branch here for RPi.

    // Assume we're on windows by default
    let platform: string = "win-x64";
    if (os.platform() === "darwin") {
      platform = "macos-x64";
    } else if (os.platform() === "linux") {
      platform = "linux-x64";
    }

    // Only C# has Debug/Release, Node just has a single build type.
    let postfix = "";
    if (this._engine === "csharp" || this._engine === "rs") {
      postfix = "-Release";
    }

    // The engine repo name is also the prefix of the CLI. Handy!
    return `${this.EngineRepo}-${platform}${postfix}`;
  }

  public async CheckForNewEngineVersion(): Promise<boolean> {
    this._logger.debug("Checking for new engine version.");
    // If we don't have a current version, then any release is newer than what
    // we've got.
    if (this._config.CurrentEngineVersion === "") {
      this._logger.debug("No engine version found, assuming initial download.");
      return true;
    }

    if (this._config.UsePrereleaseEngine) {
      return await this.CheckForNewEnginePrereleaseVersion();
    }
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                    repo: this.EngineRepo });
    this._logger.debug(`Current Engine Version: ${this._config.CurrentEngineVersion}`);
    this._logger.debug(`Latest Engine Version: ${releaseInfo.data.tag_name}`);
    return releaseInfo.data.tag_name !== this._config.CurrentEngineVersion;
  }

  public async DownloadLatestEngineVersion(): Promise<void> {
    this._logger.debug("Downloading latest engine version.");
    if (this._config.UsePrereleaseEngine) {
      return await this.DownloadLatestEnginePrereleaseVersion();
    }
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                    repo: this.EngineRepo });
    this._logger.debug(`Trying to download engine release ${releaseInfo.data.tag_name} from ${this.EngineRepo}.`);
    await this.DownloadEngineRelease(releaseInfo.data.assets);
    this._config.CurrentEngineVersion = releaseInfo.data.tag_name;
  }

  public CancelDownload() {
    // https://github.com/request/request/issues/772
    if (this._request !== null) {
      this._logger.info(`Cancelling current download.`);
      (this._request as any).abort();
    }
  }

  private async CheckForNewEnginePrereleaseVersion(): Promise<boolean> {
    // If we're using a prerelease, then it's always going to be the same tag,
    // which isn't super helpful for figuring out whether there's a newer
    // release. Using last time downloaded means screwing with timezones,
    // which is always badness. So just extract the git hash off the latest
    // release and compare it to the git hash on our current release.
    const releaseInfo = await this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                   repo: this.EngineRepo,
                                                                   tag: GithubReleaseManager.PRERELEASE_TAG });

    return releaseInfo.data.target_commitish !== this._config.CurrentEngineVersion;
  }

  private async DownloadLatestEnginePrereleaseVersion(): Promise<void> {
    const releaseInfo = await this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                   repo: this.EngineRepo,
                                                                   tag: GithubReleaseManager.PRERELEASE_TAG });
    await this.DownloadEngineRelease(releaseInfo.data.assets);
    this._config.CurrentEngineVersion = releaseInfo.data.target_commitish;
  }

  private async DownloadEngineRelease(aReleaseInfo: ISimplifiedOctokitAsset[]): Promise<void> {
    this._logger.debug(`Downloading Engine release.`);
    let releaseUrl: string | null = null;
    let releaseName: string;
    for (const releaseAsset of aReleaseInfo) {
      if (releaseAsset.name.startsWith(this.EngineFilenamePrefix)) {
        releaseUrl = releaseAsset.browser_download_url;
        releaseName = releaseAsset.name;
        break;
      }
    }
    if (releaseUrl === null) {
      this._logger.warn(`Cannot find proper release to download.`);
      throw new Error("Cannot find proper release!");
    }

    this._logger.debug(`Engine Name: ${releaseName!}`);
    this._logger.debug(`Engine URL: ${releaseUrl}`);

    const ext = path.extname(releaseName!);
    const engineFile = path.join(IntifaceUtils.UserConfigDirectory, `engine_installer${ext}`);
    this._logger.debug(`Downloading file to ${engineFile}`);
    await this.DownloadFile(releaseUrl, engineFile);
    this._logger.debug(`File finished downloading.`);
    if (releaseName!.endsWith(".zip")) {
      this._logger.debug(`Unzipping engine to configuration directory.`);
      await this.UnzipEngine(engineFile);
    } else if (releaseName!.endsWith(".exe")) {
      this._logger.debug(`Running engine installer.`);
      await this.InstallEngine(engineFile);
    } else {
      this._logger.warn(`Cannot identify engine installer type.`);
      throw new Error("Cannot identify engine installer type!");
    }
  }

  private async InstallEngine(aEngineFile: string): Promise<void> {
    // TODO Wait for the installer to write the ini file with the engine path.
    let i = 0;
    let hasRun = false;
    // Windows virus checkers can take a while, and there's not a good way to
    // test for when they're done, so just spinwait. Ugh.
    //
    // TODO Clean this up at some point, it's really gross right now.
    while (i < 5 && !hasRun) {
      this._logger.debug(`Trying to run engine installer (Make take multiple tries).`);
      try {
        const [p, res, rej] = IntifaceUtils.MakePromise();
        // Now we start up our external process.
        //
        // TODO Callback is just exit event basically, not sure what this is
        // defined twice.
        this._installerProcess =
          child_process.execFile(aEngineFile, [], {},
                                 (error: Error, stdout: string | Buffer, stderr: string | Buffer) => {
                                   if (error) {
                                     console.log(error);
                                     console.log("Installer failed to run.");
                                     rej(error);
                                     return;
                                   }
                                   hasRun = true;
                                 });
        this._installerProcess.on("exit", async (code: number, signal: string) => {
          const unlink = promisify(fs.unlink);
          // TODO Should probably emit some sort of installerFinished event?
          await unlink(aEngineFile);
          this._installerProcess = null;
          res();
        });
        await p;
        this._config.InstalledEngineType = this._config.Engine;
        return;
      } catch {
        // Only wait and continue if we haven't run yet.
        if (!hasRun) {
          await IntifaceUtils.Sleep(1000);
          i += 1;
        }
      }
    }
    throw new Error("Cannot run installer!");
  }

  private async UnzipEngine(aEngineFile: string): Promise<void> {
    
    this._logger.debug(`Unzipping engine to config directory.`);
    const exists = promisify(fs.exists);
    const unlink = promisify(fs.unlink);
    const chmod = promisify(fs.chmod);
    const writeFile = promisify(fs.writeFile);

    if (!await exists(aEngineFile)) {
      throw new Error(`Engine file path ${aEngineFile} does not exist.`);
    }

    const engineDirectory = path.join(IntifaceUtils.UserConfigDirectory, "engine");
    this._logger.debug(`Writing engine to ${engineDirectory}`);
    if (await exists(engineDirectory)) {
      const asyncrim = promisify(rimraf);
      await asyncrim(engineDirectory);
    }
    const [p, res, rej] = IntifaceUtils.MakePromise();
    fs.createReadStream(aEngineFile)
      .pipe(unzipper.Extract({ path: engineDirectory }).on("close", () => res()));
    await p;
    this._logger.debug(`Engine unzipped, removing zip file.`);
    await unlink(aEngineFile);
    this._logger.debug(`Updating engine file permissions.`);
    const engineExecutable = path.join(engineDirectory, ServerProcess.EXECUTABLE_NAME);
    if (os.platform() !== "win32") {
      await chmod(engineExecutable, 0o755);
    }
    const enginePathFile = path.join(IntifaceUtils.UserConfigDirectory, "enginepath.txt");
    await writeFile(enginePathFile, engineDirectory, { encoding: "utf-8" });
    this._config.InstalledEngineType = this._config.Engine;
    // TODO Should download some sort of checksum to check against.
    // TODO Should probably emit some sort of installerFinished event?
  }

  //
  // Utility Functions
  //

  private get EngineRepo(): string {
    return `${GithubReleaseManager.ENGINE_PREFIX}-${this._engine}`;
  }

  private async DownloadFile(aUrl: string, aOutputName: string): Promise<void> {
    // Variable to save downloading progress
    let receivedBytes = 0;
    let totalBytes = 0;

    const outStream = fs.createWriteStream(aOutputName);
    const [p, res, rej] = IntifaceUtils.MakePromise<void>();

    this._request = request.get(aUrl);
    this._request
      .on("error", (err) => {
        rej(err);
      })
      .on("response", (data) => {
        totalBytes = parseInt(data.headers["content-length"]!, 10);
      })
      .on("data", (chunk) => {
        receivedBytes += chunk.length;
        if (receivedBytes === totalBytes) {
          res();
        }
        // this._logger.trace(`Amount downloaded: ${receivedBytes} ${totalBytes}`);
        this.emit("progress", {
          receivedBytes,
          totalBytes,
        });
      }).pipe(outStream);
    return p;
  }
}
