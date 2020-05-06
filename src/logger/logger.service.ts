import * as winston from 'winston';
import { LoggerService } from '@nestjs/common';

// https://github.com/winstonjs/winston
export class Logger implements LoggerService {
  logger: winston.Logger;

  constructor() {
    const fileFormat = winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    );

    // levelにdebugを指定することでdebug以上のLevelのログが出力される
    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
        }),
        new winston.transports.File({
          filename: 'log/error.log',
          level: 'error',
          format: fileFormat,
        }),
        new winston.transports.File({
          filename: 'log/combined.log',
          level: 'debug',
          format: fileFormat,
        }),
      ],
    });

    this.logger = logger;
  }

  log(message: string) {
    this.logger.log({
      level: 'info',
      message: `${message}`,
    });
  }

  error(message: string, trace: string) {
    this.logger.log({
      level: 'error',
      message: `${message}:${trace}`,
    });
  }

  warn(message: string) {
    this.logger.log({
      level: 'warn',
      message: `WARNING: ${message}`,
    });
  }

  debug(message: string) {
    this.logger.log({
      level: 'debug',
      message: `${message}`,
    });
  }

  verbose(message: string) {
    this.logger.log({
      level: 'verbose',
      message: `${message}`,
    });
  }
}
