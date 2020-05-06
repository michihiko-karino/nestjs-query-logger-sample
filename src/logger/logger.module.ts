import { Logger } from './logger.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
