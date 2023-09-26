import { Module } from '@nestjs/common';
import { FrogService } from './frog.service';
import { FrogController } from './frog.controller';

@Module({
  providers: [FrogService],
  controllers: [FrogController]
})
export class FrogModule {}
