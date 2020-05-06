import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Logger } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getHello(): Promise<User> {
    this.logger.debug('gethello');
    return this.appService.getHello();
  }
}
