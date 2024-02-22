import { Test, TestingModule } from '@nestjs/testing';
import { CharacterEnemyService } from './character-enemy.service';

describe('CharacterEnemyService', () => {
  let service: CharacterEnemyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterEnemyService],
    }).compile();

    service = module.get<CharacterEnemyService>(CharacterEnemyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
