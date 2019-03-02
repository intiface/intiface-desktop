import { IntifaceConfiguration, IntifaceConfigurationFileManager } from "../src";
import * as fs from "fs";
import * as os from "os";
import * as crypto from "crypto";
import * as path from "path";

describe("Configuration tests", async () => {

  let _tempConfigFilePath: string;

  beforeEach(() => {
    const tmpName = crypto.pseudoRandomBytes(4).toString("hex") + ".buttplugrc";
    _tempConfigFilePath = path.join(os.tmpdir(), tmpName);
  });

  it("Creates a new settings file if one cannot be loaded", () => {
    expect(fs.existsSync(_tempConfigFilePath)).toBeFalsy();
    const mgr = new IntifaceConfigurationFileManager(_tempConfigFilePath);
    expect(fs.existsSync(_tempConfigFilePath)).toBeTruthy();
  });

  it("Loads an existing settings file if one exists", () => {
    expect(fs.existsSync(_tempConfigFilePath)).toBeFalsy();
    const mgr = new IntifaceConfigurationFileManager(_tempConfigFilePath);
    const newServerName = "New Test Name";
    mgr.Config.ServerName = newServerName;
    expect(mgr.Config.ServerName).toBe(newServerName);
    mgr.Save();
    expect(fs.existsSync(_tempConfigFilePath)).toBeTruthy();

    const newMgr = new IntifaceConfigurationFileManager(_tempConfigFilePath);
    newMgr.Load();
    expect(newMgr.Config.ServerName).toBe(newServerName);
  });

  it("Should throw if mismatched property is in file", () => {
    fs.writeFileSync(_tempConfigFilePath, "{ \"notAValue\": false }", { encoding: "utf-8" });
    const newMgr = new IntifaceConfigurationFileManager(_tempConfigFilePath);
    expect(() => newMgr.Load()).toThrowError("Unknown property");
  });

  it("Throws if settings file cannot be loaded or created", () => {
    expect(fs.existsSync(_tempConfigFilePath)).toBeFalsy();
    fs.writeFileSync(_tempConfigFilePath, "{}", { encoding: "utf-8" });
    fs.chmodSync(_tempConfigFilePath, 0o444);
    expect(() => new IntifaceConfigurationFileManager(_tempConfigFilePath)).toThrowError("permission denied");
  });
});
