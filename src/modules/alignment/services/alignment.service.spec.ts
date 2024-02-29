import { Test, TestingModule } from '@nestjs/testing';
import { AlignmentService } from './alignment.service';

describe('AlignmentService', () => {
  let service: AlignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlignmentService],
    }).compile();

    service = module.get<AlignmentService>(AlignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
