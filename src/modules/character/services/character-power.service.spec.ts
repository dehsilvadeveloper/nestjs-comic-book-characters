import { Test, TestingModule } from '@nestjs/testing';
import { CharacterPowerService } from './character-power.service';

describe('CharacterPowerService', () => {
  let service: CharacterPowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterPowerService],
    }).compile();

    service = module.get<CharacterPowerService>(CharacterPowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
