import { Test, TestingModule } from '@nestjs/testing';
import { CharacterPowerController } from './character-power.controller';
import { CharacterPowerService } from '../services/character-power.service';

describe('CharacterPowerController', () => {
  let controller: CharacterPowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterPowerController],
      providers: [CharacterPowerService],
    }).compile();

    controller = module.get<CharacterPowerController>(CharacterPowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
