import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMetadataArgsStorage } from 'typeorm';
import { LoggerModule } from './logger/logger.module';
import { QueryLogger } from './logger/queryLogger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 33306,
      username: 'user',
      password: 'password',
      database: 'database',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: false,
      keepConnectionAlive: true,
      logger: QueryLogger.init(),
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
