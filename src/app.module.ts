import {MiddlewareConsumer, Module, NestModule, RequestMethod,} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {FirebaseApp} from './auth/firebase-app';
import {PreAuthMiddleware} from './auth/pre-auth-middleware';
import {AuthStrategy} from './auth/auth.strategy';
import {UsersModule} from './users/users.module';
import {FrogsModule} from './frogs/frogs.module';
import {APP_FILTER} from "@nestjs/core";
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, FrogsModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    FirebaseApp,
    AuthStrategy,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(PreAuthMiddleware).forRoutes({
      path: '/secure/*',
      method: RequestMethod.ALL,
    });
  }
}