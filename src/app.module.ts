import {MiddlewareConsumer, Module, NestModule, RequestMethod,} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {FrogsModule} from './frogs/frogs.module';
import {APP_FILTER} from "@nestjs/core";
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, FrogsModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {

  }
}