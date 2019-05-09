import * as winston from "winston";
import { EventEmitter } from "events";

export class IntifaceLogger extends EventEmitter {
  protected  _logger: winston.Logger;

  protected constructor(aLogType: "frontend" | "backend" | "process", aDefaultLocation: string) {
    super();
    const ButtplugLevels = {
      levels: {
        fatal: 1,
        error: 2,
        warn: 3,
        info: 4,
        debug: 5,
        trace: 6,
      },
      colors: {
        fatal: "gray",
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
