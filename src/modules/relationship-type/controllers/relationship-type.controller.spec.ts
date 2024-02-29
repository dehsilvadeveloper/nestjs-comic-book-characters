import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipTypeController } from './relationship-type.controller';
import { RelationshipTypeService } from '../services/relationship-type.service';

describe('RelationshipTypeController', () => {
  let controller: RelationshipTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationshipTypeController],
      providers: [RelationshipTypeService],
    }).compile();

    controller = module.get<RelationshipTypeController>(RelationshipTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
