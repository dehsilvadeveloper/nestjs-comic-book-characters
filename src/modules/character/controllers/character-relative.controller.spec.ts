import { Test, TestingModule } from '@nestjs/testing';
import { CharacterRelativeController } from './character-relative.controller';
import { CharacterRelativeService } from '../services/character-relative.service';

describe('CharacterRelativeController', () => {
  let controller: CharacterRelativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterRelativeController],
      providers: [CharacterRelativeService],
    }).compile();

    controller = module.get<CharacterRelativeController>(CharacterRelativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
