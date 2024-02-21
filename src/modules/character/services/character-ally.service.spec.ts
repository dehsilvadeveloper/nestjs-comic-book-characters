import { Test, TestingModule } from '@nestjs/testing';
import { CharacterAllyService } from './character-ally.service';

describe('CharacterAllyService', () => {
  let service: CharacterAllyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterAllyService],
    }).compile();

    service = module.get<CharacterAllyService>(CharacterAllyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
