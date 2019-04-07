import * as winston from "winston";

export class IntifaceLogger {
  protected  _logger: winston.Logger;

  protected constructor(aLogType: "frontend" | "backend" | "process", aDefaultLocation: string) {
    this._logger = winston.createLogger({
      level: "silly",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }).child({logType: aLogType, location: aDefaultLocation });
  }
}
