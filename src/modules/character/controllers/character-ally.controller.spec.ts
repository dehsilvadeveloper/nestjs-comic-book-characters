import { Test, TestingModule } from '@nestjs/testing';
import { CharacterAllyController } from './character-ally.controller';
import { CharacterAllyService } from '../services/character-ally.service';

describe('CharacterAllyController', () => {
  let controller: CharacterAllyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterAllyController],
      providers: [CharacterAllyService],
    }).compile();

    controller = module.get<CharacterAllyController>(CharacterAllyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
