import { IntifaceConfiguration } from "intiface-core-library";
import { IntifaceConfigurationFileManager } from "../src";
import * as fs from "fs";
import * as os from "os";
import * as crypto from "crypto";
import * as path from "path";

describe("Configuration tests", () => {

  let _tempConfigFilePath: string;

  beforeEach(() => {
    const tmpName = crypto.pseudoRandomBytes(4).toString("hex") + ".buttplugrc";
    _tempConfigFilePath = path.join(os.tmpdir(), tmpName);
  });

  it("Creates a new settings file if one cannot be loaded", async () => {
    expect(fs.existsSync(_tempConfigFilePath)).toBeFalsy();
    await IntifaceConfigurationFileManager.Create(_tempConfigFilePath);
    expect(fs.existsSync(_tempConfigFilePath)).toBeTruthy();
  });

  it("Loads an existing settings file if one exists", async () => {
    expect(fs.existsSync(_tempConfigFilePath)).toBeFalsy();
    const mgr = await IntifaceConfigurationFileManager.Create(_tempConfigFilePath);
    const newServerName = "New Test Name";
    mgr.Config.ServerName = newServerName;
    expect(mgr.Config.ServerName).toBe(newServerName);
    await mgr.Save();
    expect(fs.existsSync(_tempConfigFilePath)).toBeTruthy();

    const newMgr = await IntifaceConfigurationFileManager.Create(_tempConfigFilePath);
    await newMgr.Load();
    expect(newMgr.Config.ServerName).toBe(newServerName);
  });

  it("Should throw if mismatched property is in file", () => {
    fs.writeFileSync(_tempConfigFilePath, "{ \"notAValue\": false }", { encoding: "utf-8" });
    // tslint:disable-next-line no-floating-promises
    expect(IntifaceConfigurationFileManager.Create(_tempConfigFilePath))
      .rejects
      .toThrowError("Unknown property notAValue");
  });

  it("Throws if settings file cannot be loaded or created", () => {
    expect(fs.existsSync(_tempConfigFilePath)).toBeFalsy();
    fs.writeFileSync(_tempConfigFilePath, "{}", { encoding: "utf-8" });
    fs.chmodSync(_tempConfigFilePath, 0o444);
    // tslint:disable-next-line no-floating-promises
    expect(IntifaceConfigurationFileManager.Create(_tempConfigFilePath))
      .rejects
      .toThrowError("permission denied");
  });
});
