import { IntifaceConfiguration, GithubReleaseManager } from "../src";

describe("Configuration tests", async () => {

  let config: IntifaceConfiguration;
  let mgr: GithubReleaseManager;

  beforeEach(() => {
    config = new IntifaceConfiguration();
    mgr = new GithubReleaseManager(config);
  });

  it("should return expected values for configurations", async () => {
    config.CurrentDeviceFileVersion = 1;
    // tslint:disable-next-line no-floating-promises
    expect(mgr.CheckForNewDeviceFileVersion()).resolves.toBeFalsy();
    config.CurrentDeviceFileVersion = 1000;
    // tslint:disable-next-line no-floating-promises
    expect(mgr.CheckForNewDeviceFileVersion()).resolves.toBeFalsy();
  });
});
