import * as Octokit from "@octokit/rest";
import * as os from "os";
import * as fs from "fs";
import Axios from "axios";
import { EventEmitter } from "events";

// Expand this as we bring more redistributable engines online
export type EngineType = "buttplug-js" | "buttplug-csharp";

export class GithubReleaseManager extends EventEmitter {

  private static REPO_OWNER = "buttplugio";
  private static PRERELEASE_TAG = "420.69.666";

  private _client: Octokit = new Octokit();
  // This could be either "buttplug-js" or "buttplug-csharp" but it's hard to
  // restrict the type, since we'll be loading it out of a file.
  private _engine: EngineType = "buttplug-csharp";
  private _shouldUsePrerelease: boolean = false;
  // The latest version we've downloaded. If null, means we've yet to download
  // an engine.
  private _currentVersion: string | null = null;
  private _latestVersion: string | null = null;

  public constructor(aEngine: EngineType, aUsePrerelease: boolean, aCurrentVersion: string | null) {
    super();
    this._engine = aEngine;
    this._shouldUsePrerelease = aUsePrerelease;
  }

  public get ReleaseFilenamePrefix(): string {
    // TODO: Do we need to worry about 32-bit platforms?

    // TODO: Gonna need an armv6 branch here for RPi.

    // Assume we're on windows by default
    let platform: string = "win-x64";
    if (os.platform() === "darwin") {
      platform = "osx-x64";
    } else if (os.platform() === "linux") {
      platform = "linux-x64";
    }

    return `${this._engine}-${platform}-cli-Release`;
  }

  public get CurrentVersion(): string | null {
    //return this._currentVersion;
    return null;
  }

  public async CheckForNewRelease(): Promise<boolean> {

    // If we don't have a current version, then any release is newer than what
    // we've got. :P
    if (this._currentVersion === null) {
      return true;
    }

    if (this._shouldUsePrerelease) {
      return await this.CheckForNewPrerelease();
    }

    const releaseInfo = this._client.repos.getLatestRelease({ owner: GithubReleaseManager.REPO_OWNER,
                                                              repo: this._engine });
    return false;
  }

  public async DownloadLatestRelease(): Promise<string> {
    // if (this._shouldUsePrerelease) {
      return await this.DownloadLatestPrerelease();
    // }
  }

  private async DownloadLatestPrerelease(): Promise<string> {
    const releaseInfo = await this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.REPO_OWNER,
                                                                   repo: this._engine,
                                                                   tag: GithubReleaseManager.PRERELEASE_TAG });
    let releaseUrl: string | null = null;
    for (const releaseAsset of releaseInfo.data.assets) {
      if (releaseAsset.name.startsWith(this.ReleaseFilenamePrefix)) {
        releaseUrl = releaseAsset.browser_download_url;
        break;
      }
    }
    if (releaseUrl === null) {
      throw new Error("Cannot find proper release!");
    }
    let file = await Axios.get(releaseUrl, {
      responseType: "arraybuffer",
      method: "get",
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
    fs.writeFileSync("./test.zip", file.data);
    return "./test.zip";
  }

  private async CheckForNewPrerelease(): Promise<boolean> {
    // If we"re using a prerelease, then it"s always going to be the same tag,
    // which isn"t super helpful for figuring out whether there"s a newer
    // release. Using last time downloaded means screwing with timezones,
    // which is always badness. So just extract the git hash off the latest
    // release and compare it to the git hash on our current release. Takes a
    // few extra REST queries but it"ll be reliable.
    const releaseInfo = this._client.repos.getReleaseByTag({ owner: GithubReleaseManager.REPO_OWNER,
                                                             repo: this._engine,
                                                             tag: GithubReleaseManager.PRERELEASE_TAG });
    return false;
  }
}
