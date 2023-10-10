import { Module } from '@nestjs/common';
import { FrogsService } from './frogs.service';
import { FrogsController } from './frogs.controller';
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [FrogsController],
  providers: [FrogsService, PrismaService],
})
export class FrogsModule {}
