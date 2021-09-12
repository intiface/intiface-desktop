/*!
 * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
 * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
 * project root for full license information.
 *
 * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
 */

import { SerialProtocolConfiguration } from "./SerialProtocolConfiguration";
import { IProtocolConfiguration } from "./IProtocolConfiguration";

export class DeviceConfigurationManager {

  public static get Manager(): DeviceConfigurationManager {
    if (DeviceConfigurationManager._manager === null) {
      throw new Error("Device configuration manager not yet initialized!");
    }

    return DeviceConfigurationManager._manager!;
  }

  public static LoadFromJson(aExternalConfig: string): void {
    const config = JSON.parse(aExternalConfig);
    //DeviceConfigurationManager._manager = new DeviceConfigurationManager(config);
  }

  private static _manager: DeviceConfigurationManager | null = null;
  private _configs: Map<string, IProtocolConfiguration[]> = new Map<string, IProtocolConfiguration[]>();
  private _userConfigs: Map<string, IProtocolConfiguration[]> = new Map<string, IProtocolConfiguration[]>();

  /*
  protected constructor(aConfigObject: object) {
    // Parse our configuration object last, as we need to add device protocols
    // first.
    this.ParseConfig(aConfigObject, this._configs);
  }
  */

  public constructor() {
  }

  public HasPort(port: string): boolean {
    for (let [_, configs] of this._userConfigs) {
      for (let config of configs) {
        if (config instanceof SerialProtocolConfiguration && config.Matches(new SerialProtocolConfiguration(port, 115200, 8, 1, "N"))) {
          return true;
        }
      }
    }
    return false;
  }

  public AddUserConfig(protocolName: string, config: IProtocolConfiguration) {
    if (this._userConfigs.has(protocolName)) {
      let configs = this._userConfigs.get(protocolName)!;
      configs.push(config);
      this._userConfigs.set(protocolName, configs);
    } else {
      this._userConfigs.set(protocolName, [config]);
    }
  }

  public RemoveUserConfig(protocolName: string, config: IProtocolConfiguration) {
    if (this._userConfigs.has(protocolName)) {
      let configs = this._userConfigs.get(protocolName)!;
      configs = configs.filter((x) => !x.Matches(config));
      if (configs.length > 0 ) {
        this._userConfigs.set(protocolName, configs);
      } else {
        this._userConfigs.delete(protocolName);
      }
    }
  }

  public get UserConfigAsJSON(): string {
    if (this._userConfigs.size == 0) {
      return "";
    }
    let config_obj = { version: 58, protocols: {} };
    for (let protocol of this._userConfigs.keys()) {
      config_obj.protocols[protocol] = {};
      config_obj.protocols[protocol]["serial"] = this._userConfigs.get(protocol)!.map((config) => config.AsObject());
    }
    console.log(JSON.stringify(config_obj));
    return JSON.stringify(config_obj);
  }

  public get UserConfig(): Map<string, IProtocolConfiguration[]> {
    return this._userConfigs;
  }

  public IsUserConfigValid(aExternalConfig: string): boolean {
    // Very dumb test for user config validity.
    const configObject = JSON.parse(aExternalConfig);
    if (!("protocols" in configObject)) {
      return false;
    }
    if (!("version" in configObject)) {
      return false;
    }
    return true;
  }

  public LoadUserConfigurationFromJson(aExternalConfig: string): void {
    const configObject = JSON.parse(aExternalConfig);
    this.ParseUserConfig(configObject);    
  }

  public GetAllConfigsOfType<T extends IProtocolConfiguration>(constructor: new (...args: any[]) => T): T[] {
    const configs: T[] = [];
    for (const [name, config] of this._configs.entries()) {
      if (config instanceof constructor) {
        configs.push(config);
      }
    }
    return configs;
  }

  protected ParseUserConfig(configObject: object): void {
    this._userConfigs = new Map<string, IProtocolConfiguration[]>();
    if (!("protocols" in configObject)) {
      return;
    }
    const protocols = (configObject as any).protocols as object;
    for (const protocolName of Object.keys(protocols)) {
      const protocol = protocols[protocolName];
      // Ok maybe XInput being null isn't such a good idea.
      if (protocol == null) {
        continue;
      }
      for (const bus of Object.keys(protocol)) {
        switch (bus) {
          case "serial":
            for (let portObj of protocol[bus]) {
              this.AddUserConfig(protocolName, SerialProtocolConfiguration.FromObject(portObj));
            }
            break;
        }
      }
    }
  }
}
