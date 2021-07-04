/*!
 * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
 * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
 * project root for full license information.
 *
 * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
 */

import { IProtocolConfiguration } from "./IProtocolConfiguration";

export class SerialProtocolConfiguration implements IProtocolConfiguration {

  private port: string;
  private baudRate: number;
  private dataBits: number;
  private stopBits: number;
  private parity: string;

  public constructor(port: string, baudRate: number, dataBits: number, stopBits: number, parity: string) {
    this.port = port;
    this.baudRate = baudRate;
    this.dataBits = dataBits;
    this.stopBits = stopBits;
    this.parity = parity;
  }

  public static FromObject(obj: object): SerialProtocolConfiguration {
    return new SerialProtocolConfiguration(obj["port"], obj["baud-rate"], obj["data-bits"], obj["stop-bits"], obj["parity"]);
  }

  public AsObject(): object {
    return {
      "baud-rate": this.baudRate,
      "data-bits": this.dataBits,
      "stop-bits": this.stopBits,
      "port": this.port,
      "parity": this.parity
    };
  }

  public Matches(aConfig: IProtocolConfiguration): boolean {
    if (aConfig instanceof SerialProtocolConfiguration) {
      return aConfig.port === this.port;
    }
    return false;
  }

  public Merge(aConfig: IProtocolConfiguration): void {
    // TODO Fill in for user config.
  }
}
