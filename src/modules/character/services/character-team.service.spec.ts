import { Test, TestingModule } from '@nestjs/testing';
import { CharacterTeamService } from './character-team.service';

describe('CharacterTeamService', () => {
  let service: CharacterTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterTeamService],
    }).compile();

    service = module.get<CharacterTeamService>(CharacterTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
