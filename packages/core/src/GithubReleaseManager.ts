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
import { IntifaceConfiguration } from "./IntifaceConfiguration";
import { IntifaceBackendLogger } from "./IntifaceBackendLogger";
import * as winston from "winston";
import { ServerProcess } from "./ServerProcess";
import axios from "axios";

// Octokit goes kinda crazy with their asset types, but doesn't have a general
// interface or type for them. We usually only need filenames and download URLs,
// so this is sort of a "Good enough" type shape.
interface ISimplifiedOctokitAsset {
  name: string;
  browser_download_url: string;
}

export class GithubReleaseManager extends EventEmitter {
  private static BUTTPLUG_REPO_OWNER = "buttplugio";
  private static INTIFACE_REPO_OWNER = "intiface";
  private static INTIFACE_REPO = "intiface-cli-rs"
  private static PRERELEASE_TAG = "420.69.666";
  private static DEVICE_CONFIG_VERSION_URL = "https://buttplug-rs-device-config.buttplug.io/version";
  private static DEVICE_CONFIG_URL = "https://buttplug-rs-device-config.buttplug.io";

  private _client: Octokit = new Octokit();
  private _logger: winston.Logger;

  // This could be either "intiface-node" or "intiface-csharp" but it's hard to
  // restrict the type, since we'll be loading it out of a file.
  private _request: request.Request | null = null;
  private readonly _config: IntifaceConfiguration;
  private _installerProcess: child_process.ChildProcess | null = null;

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._logger = IntifaceBackendLogger.GetChildLogger("backend", this.constructor.name);
    this._logger.debug("Constructing Github Release Manager");
    this._config = aConfig;
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
    try {
      const releaseInfo = await axios.get(GithubReleaseManager.DEVICE_CONFIG_VERSION_URL);
      // Device versions are in the form "vX" (because tagging with just a number
      // can get gross), so we want to process everything after the v and see if
      // it's newer than what we've got.
      const releaseVersion = parseInt(releaseInfo.data);
      this._logger.debug(`Current device file version: ${this._config.CurrentDeviceFileVersion}`);
      this._logger.debug(`Latest device file version: ${releaseVersion}`);
      return releaseVersion > this._config.CurrentDeviceFileVersion;
    } catch (e) {
      this._logger.error(`Cannot retrieve device config version: ${e}`);
      return false;
    }
  }

  public async DownloadLatestDeviceFileVersion(): Promise<void> {
    this._logger.debug("Downloading latest device file version");
    this._logger.debug(`Downloading device file from ${GithubReleaseManager.DEVICE_CONFIG_URL}`);
    await this.DownloadFile(GithubReleaseManager.DEVICE_CONFIG_URL, IntifaceUtils.DeviceConfigFilePath);
    this._logger.debug(`Stored device file to ${IntifaceUtils.DeviceConfigFilePath}`);
    const releaseInfo = await axios.get(GithubReleaseManager.DEVICE_CONFIG_VERSION_URL);
    this._config.CurrentDeviceFileVersion = parseInt(releaseInfo.data);
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

    let postfix = "-Release";

    // The engine repo name is also the prefix of the CLI. Handy!
    return `${GithubReleaseManager.INTIFACE_REPO}-${platform}${postfix}`;
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
                                                                    repo: GithubReleaseManager.INTIFACE_REPO });
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
                                                                    repo: GithubReleaseManager.INTIFACE_REPO });
    this._logger.debug(`Trying to download engine release ${releaseInfo.data.tag_name} from ${GithubReleaseManager.INTIFACE_REPO}.`);
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
                                                                   repo: GithubReleaseManager.INTIFACE_REPO,
                                                                   tag: GithubReleaseManager.PRERELEASE_TAG });

    return releaseInfo.data.target_commitish !== this._config.CurrentEngineVersion;
  }

  private async DownloadLatestEnginePrereleaseVersion(): Promise<void> {
    const releaseInfo = await this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                   repo: GithubReleaseManager.INTIFACE_REPO,
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
    } else {
      this._logger.warn(`Cannot identify engine installer type.`);
      throw new Error("Cannot identify engine installer type!");
    }
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
    // TODO Should download some sort of checksum to check against.
    // TODO Should probably emit some sort of installerFinished event?
  }

  //
  // Utility Functions
  //

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
