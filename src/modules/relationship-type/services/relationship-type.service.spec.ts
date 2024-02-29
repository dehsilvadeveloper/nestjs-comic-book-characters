import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipTypeService } from './relationship-type.service';

describe('RelationshipTypeService', () => {
  let service: RelationshipTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationshipTypeService],
    }).compile();

    service = module.get<RelationshipTypeService>(RelationshipTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
