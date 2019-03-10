import * as Octokit from "@octokit/rest";
import * as os from "os";
import * as fs from "fs";
import * as semver from "semver";
import * as path from "path";
import * as unzipper from "unzipper";
import * as rimraf from "rimraf";
import * as request from "request";
import { IntifaceUtils } from "./Utils";
import { EventEmitter } from "events";
import { IntifaceConfiguration, ButtplugEngineType } from "./IntifaceConfiguration";

export class GithubReleaseManager extends EventEmitter {

  private static REPO_OWNER = "buttplugio";
  private static PRERELEASE_TAG = "420.69.666";
  private static DEVICE_CONFIG_REPO = "buttplug-device-config";

  private _client: Octokit = new Octokit();
  // This could be either "buttplug-js" or "buttplug-csharp" but it's hard to
  // restrict the type, since we'll be loading it out of a file.
  private _engine: ButtplugEngineType = "buttplug-csharp";
  private _shouldUsePrerelease: boolean = false;
  // The latest version we've downloaded. If null, means we've yet to download
  // an engine.
  private _currentEngineVersion: string = "";
  private _currentDeviceFileVersion: string = "";
  private readonly _config: IntifaceConfiguration;

  public constructor(aConfig: IntifaceConfiguration) {
    super();
    this._config = aConfig;
    this._engine = aConfig.Engine;
    this._shouldUsePrerelease = aConfig.UsePrereleaseEngine;
    this._currentEngineVersion = aConfig.CurrentEngineVersion;
    this._currentDeviceFileVersion = aConfig.CurrentDeviceFileVersion;
  }

  public get EngineFilenamePrefix(): string {
    // TODO: Do we need to worry about 32-bit platforms?

    // TODO: Gonna need an armv6cause branch here for RPi.

    // Assume we're on windows by default
    let platform: string = "win-x64";
    if (os.platform() === "darwin") {
      platform = "macos-x64";
    } else if (os.platform() === "linux") {
      platform = "linux-x64";
    }

    // Only C# has Debug/Release, Node just has a single build type.
    let postfix = "";
    if (this._engine === "buttplug-csharp") {
      postfix = "-Release";
    }

    return `${this._engine}-${platform}-cli${postfix}`;
  }

  public async CheckForNewEngineVersion(): Promise<boolean> {
    // If we don't have a current version, then any release is newer than what
    // we've got. :P
    if (this._currentEngineVersion === "") {
      return true;
    }

    if (this._shouldUsePrerelease) {
      return await this.CheckForNewEnginePrereleaseVersion();
    }
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.REPO_OWNER,
                                                                    repo: this._engine });
    return semver.gt(releaseInfo.data.tag_name, this._currentEngineVersion);
  }

  public async DownloadLatestEngineVersion(): Promise<void> {
    //if (this._shouldUsePrerelease) {
    return await this.DownloadLatestEnginePrereleaseVersion();
    //}
  }

  public async CheckForNewDeviceFileVersion(): Promise<boolean> {
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.REPO_OWNER,
                                                                    repo: GithubReleaseManager.DEVICE_CONFIG_REPO });
    return false;
  }

  public async DownloadLatestDeviceFileVersion(): Promise<boolean> {
    const releaseInfo = await this._client.repos.getLatestRelease({ owner: GithubReleaseManager.REPO_OWNER,
                                                                    repo: GithubReleaseManager.DEVICE_CONFIG_REPO });
    return false;
  }

  private async DownloadFile(aUrl: string, aOutputName: string): Promise<void> {

    // Variable to save downloading progress
    let receivedBytes = 0;
    let totalBytes = 0;

    const outStream = fs.createWriteStream(aOutputName);
    let res;
    let rej;
    const p = new Promise<void>((r, e) => { res = r; rej = e; });

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

  private async DownloadLatestEnginePrereleaseVersion(): Promise<void> {
    const releaseTags = await this._client.repos.listTags({ owner: GithubReleaseManager.REPO_OWNER,
                                                            repo: this._engine });

    let tagHash: string | null = null;
    for (const tag of releaseTags.data) {
      if (tag.name !== GithubReleaseManager.PRERELEASE_TAG) {
        continue;
      }
      tagHash = tag.commit.sha;
    }
    if (!tagHash) {
      // If we don't have a tag hash, this means we've somehow managed to blow
      // away our prerelease tag. That's *bad*.
      throw new Error(`Cannot get hash for prerelease tag on engine ${this._engine}`);
    }

    const releaseInfo = await this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.REPO_OWNER,
                                                                   repo: this._engine,
                                                                   tag: GithubReleaseManager.PRERELEASE_TAG });
    let releaseUrl: string | null = null;
    for (const releaseAsset of releaseInfo.data.assets) {
      if (releaseAsset.name.startsWith(this.EngineFilenamePrefix)) {
        releaseUrl = releaseAsset.browser_download_url;
        break;
      }
    }
    if (releaseUrl === null) {
      throw new Error("Cannot find proper release!");
    }

    const engineFile = path.join(IntifaceUtils.UserConfigDirectory, "engine.zip");
    await this.DownloadFile(releaseUrl, engineFile);
    await this.UnzipEngine(engineFile);

    this._config.CurrentEngineVersion = tagHash;
  }

  private async UnzipEngine(aEngineFile: string): Promise<void> {
    // TODO None of this should be sync calls, use utils.promisify
    if (!fs.existsSync(aEngineFile)) {
      throw new Error(`Engine file path ${aEngineFile} does not exist.`);
    }

    const engineDirectory = path.join(IntifaceUtils.UserConfigDirectory, "engine");
    if (fs.existsSync(engineDirectory)) {
      rimraf.sync(engineDirectory);
    }
    fs.createReadStream(aEngineFile)
      .pipe(unzipper.Extract({ path: engineDirectory }));
    fs.unlinkSync(aEngineFile);

    // TODO Should download some sort of checksum to check against.
  }

  private async CheckForNewEnginePrereleaseVersion(): Promise<boolean> {
    // If we're using a prerelease, then it's always going to be the same tag,
    // which isn't super helpful for figuring out whether there's a newer
    // release. Using last time downloaded means screwing with timezones,
    // which is always badness. So just extract the git hash off the latest
    // release and compare it to the git hash on our current release. Takes a
    // few extra REST queries but it'll be reliable.
    const releaseInfo = this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.REPO_OWNER,
                                                             repo: this._engine,
                                                             tag: GithubReleaseManager.PRERELEASE_TAG });
    return false;
  }
}
