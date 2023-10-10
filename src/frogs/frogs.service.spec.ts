import { Test, TestingModule } from '@nestjs/testing';
import { FrogsService } from './frogs.service';

describe('FrogsService', () => {
  let service: FrogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrogsService],
    }).compile();

    service = module.get<FrogsService>(FrogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
