import * as winston from "winston";
import { EventEmitter } from "events";

export class IntifaceLogger extends EventEmitter {
  protected  _logger: winston.Logger;

  protected constructor(aLogType: "frontend" | "backend" | "process" | "buttplug", aDefaultLocation: string) {
    super();
    const ButtplugLevels = {
      levels: {
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
      },
      colors: {
        error: "red",
        warn: "yellow",
        info: "green",
        debug: "blue",
        trace: "purple",
      },
    };
    this._logger = winston.createLogger({
      levels: ButtplugLevels.levels,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }).child({logType: aLogType, location: aDefaultLocation });
  }
}
