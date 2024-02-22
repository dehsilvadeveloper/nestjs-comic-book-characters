import { Test, TestingModule } from '@nestjs/testing';
import { CharacterRelativeService } from './character-relative.service';

describe('CharacterRelativeService', () => {
  let service: CharacterRelativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterRelativeService],
    }).compile();

    service = module.get<CharacterRelativeService>(CharacterRelativeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
