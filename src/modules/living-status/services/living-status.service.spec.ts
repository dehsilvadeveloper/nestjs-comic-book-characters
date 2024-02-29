import { Test, TestingModule } from '@nestjs/testing';
import { LivingStatusService } from './living-status.service';

describe('LivingStatusService', () => {
  let service: LivingStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivingStatusService],
    }).compile();

    service = module.get<LivingStatusService>(LivingStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
