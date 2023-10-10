import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FrogsModule } from './frogs/frogs.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, FrogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
