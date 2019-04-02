import * as child_process from "child_process";
import * as Octokit from "@octokit/rest";
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
  private static DEVICE_CONFIG_FILENAME = "buttplug-device-config.json";

  private _client: Octokit = new Octokit();

  // This could be either "intiface-js" or "intiface-csharp" but it's hard to
  // restrict the type, since we'll be loading it out of a file.
  private _engine: EngineType = "csharp";
  private readonly _config: IntifaceConfiguration;
  private _installerProcess: child_process.ChildProcess | null = null;

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._config = aConfig;
    this._engine = aConfig.Engine;
  }

  //
  // Device File Downloading
  //

  public async CheckForNewDeviceFileVersion(): Promise<boolean> {
    // If we don't have one yet, then obviously we need a new one.
    if (this._config.CurrentDeviceFileVersion === 0) {
      return true;
    }

    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.BUTTPLUG_REPO_OWNER,
                                                                    repo: GithubReleaseManager.DEVICE_CONFIG_REPO });
    // Device versions are in the form "vX" (because tagging with just a number
    // can get gross), so we want to process everything after the v and see if
    // it's newer than what we've got.
    const releaseVersion = parseInt(releaseInfo.data.tag_name.substr(1), 10);
    return releaseVersion > this._config.CurrentDeviceFileVersion;
  }

  public async DownloadLatestDeviceFileVersion(): Promise<void> {
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.BUTTPLUG_REPO_OWNER,
                                                                    repo: GithubReleaseManager.DEVICE_CONFIG_REPO });
    let downloadUrl: string | null = null;
    for (const asset of releaseInfo.data.assets) {
      if (asset.name === GithubReleaseManager.DEVICE_CONFIG_FILENAME) {
        downloadUrl = asset.browser_download_url;
        break;
      }
    }
    if (downloadUrl === null) {
      throw new Error("Cannot find device configuration asset to download!");
    }
    const configFile = path.join(IntifaceUtils.UserConfigDirectory, GithubReleaseManager.DEVICE_CONFIG_FILENAME);
    await this.DownloadFile(downloadUrl, configFile);
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
    if (this._engine === "csharp") {
      postfix = "-Release";
    }

    // The engine repo name is also the prefix of the CLI. Handy!
    return `${this.EngineRepo}-${platform}${postfix}`;
  }

  public async CheckForNewEngineVersion(): Promise<boolean> {
    // If we don't have a current version, then any release is newer than what
    // we've got.
    if (this._config.CurrentEngineVersion === "") {
      return true;
    }

    if (this._config.UsePrereleaseEngine) {
      return await this.CheckForNewEnginePrereleaseVersion();
    }
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                    repo: this.EngineRepo });
    return releaseInfo.data.tag_name !== this._config.CurrentEngineVersion;
  }

  public async DownloadLatestEngineVersion(): Promise<void> {
    if (this._config.UsePrereleaseEngine) {
      return await this.DownloadLatestEnginePrereleaseVersion();
    }
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.INTIFACE_REPO_OWNER,
                                                                    repo: this.EngineRepo });
    await this.DownloadEngineRelease(releaseInfo.data.assets);
    this._config.CurrentEngineVersion = releaseInfo.data.tag_name;
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
      throw new Error("Cannot find proper release!");
    }

    const ext = path.extname(releaseName!);
    const engineFile = path.join(IntifaceUtils.UserConfigDirectory, `engine_installer${ext}`);
    await this.DownloadFile(releaseUrl, engineFile);
    if (releaseName!.endsWith(".zip")) {
      await this.UnzipEngine(engineFile);
    } else if (releaseName!.endsWith(".exe")) {
      await this.InstallEngine(engineFile);
    } else {
      throw new Error("Cannot recognize engine type!");
    }
  }

  private async InstallEngine(aEngineFile: string): Promise<void> {
    // TODO Wait for the installer to write the ini file with the engine path.
    const [p, res, rej] = IntifaceUtils.MakePromise();
    let i = 0;
    // Windows virus checkers can take a while, and there's not a good way to
    // test for when they're done, so just spinwait. Ugh.
    while (i < 5) {
      try {
        // Now we start up our external process.
        this._installerProcess =
          child_process.execFile(aEngineFile, [], {},
                                 (error: Error, stdout: string | Buffer, stderr: string | Buffer) => {
                                   if (error) {
                                     rej(error);
                                   }
                                   res();
                                 });
        this._installerProcess.on("exit", async (code: number, signal: string) => {
          const unlink = promisify(fs.unlink);
          // TODO Should probably emit some sort of installerFinished event?
          await unlink(aEngineFile);
          this._installerProcess = null;
        });
        await p;
        return;
      } catch {
        await IntifaceUtils.Sleep(1000);
      }
    }
    throw new Error("Cannot run installer!");
  }

  private async UnzipEngine(aEngineFile: string): Promise<void> {
    const exists = promisify(fs.exists);
    const unlink = promisify(fs.unlink);
    const chmod = promisify(fs.chmod);

    if (!await exists(aEngineFile)) {
      throw new Error(`Engine file path ${aEngineFile} does not exist.`);
    }

    const engineDirectory = path.join(IntifaceUtils.UserConfigDirectory, "engine");
    if (await exists(engineDirectory)) {
      const asyncrim = promisify(rimraf);
      await asyncrim(engineDirectory);
    }
    const [p, res, rej] = IntifaceUtils.MakePromise();
    fs.createReadStream(aEngineFile)
      .pipe(unzipper.Extract({ path: engineDirectory }).on("close", () => res()));
    await p;
    await unlink(aEngineFile);
    // const engineExecutable = path.join(engineDirectory, GithubReleaseManager.BUTTPLUG_ENGINE_EXECUTABLE);
    // if (os.platform() !== "win32") {
    //   await chmod(engineExecutable, 0o755);
    // }

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

    request
      .get(aUrl)
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
        this.emit("progress", {
          receivedBytes,
          totalBytes,
        });
      }).pipe(outStream);
    return p;
  }
}
