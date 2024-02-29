import { Test, TestingModule } from '@nestjs/testing';
import { AlignmentController } from './alignment.controller';
import { AlignmentService } from '../services/alignment.service';

describe('AlignmentController', () => {
  let controller: AlignmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlignmentController],
      providers: [AlignmentService],
    }).compile();

    controller = module.get<AlignmentController>(AlignmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
