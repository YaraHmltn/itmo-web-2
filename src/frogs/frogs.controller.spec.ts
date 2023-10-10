import { Test, TestingModule } from '@nestjs/testing';
import { FrogsController } from './frogs.controller';
import { FrogsService } from './frogs.service';

describe('FrogsController', () => {
  let controller: FrogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrogsController],
      providers: [FrogsService],
    }).compile();

    controller = module.get<FrogsController>(FrogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
