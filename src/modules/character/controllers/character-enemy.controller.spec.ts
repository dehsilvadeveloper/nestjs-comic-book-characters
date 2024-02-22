import { Test, TestingModule } from '@nestjs/testing';
import { CharacterEnemyController } from './character-enemy.controller';
import { CharacterEnemyService } from '../services/character-enemy.service';

describe('CharacterEnemyController', () => {
  let controller: CharacterEnemyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterEnemyController],
      providers: [CharacterEnemyService],
    }).compile();

    controller = module.get<CharacterEnemyController>(CharacterEnemyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
