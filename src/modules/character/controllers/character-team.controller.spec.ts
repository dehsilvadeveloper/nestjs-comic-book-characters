import { Test, TestingModule } from '@nestjs/testing';
import { CharacterTeamController } from './character-team.controller';
import { CharacterTeamService } from '../services/character-team.service';

describe('CharacterTeamController', () => {
  let controller: CharacterTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterTeamController],
      providers: [CharacterTeamService],
    }).compile();

    controller = module.get<CharacterTeamController>(CharacterTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
