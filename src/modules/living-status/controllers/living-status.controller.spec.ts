import { Test, TestingModule } from '@nestjs/testing';
import { LivingStatusController } from './living-status.controller';
import { LivingStatusService } from '../services/living-status.service';

describe('LivingStatusController', () => {
  let controller: LivingStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivingStatusController],
      providers: [LivingStatusService],
    }).compile();

    controller = module.get<LivingStatusController>(LivingStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
