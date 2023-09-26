import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrogModule } from './frog/frog.module';

@Module({
  imports: [ConfigModule.forRoot(), FrogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
