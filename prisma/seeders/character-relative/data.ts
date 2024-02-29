import { RelationshipTypeEnum } from '../../../src/modules/relationship-type/enums/relationship-type.enum';

export const characterRelativeSeederData = [
  {
    characterId: 1, // Spider-Man
    relativeId: 2, // Spider-Girl
    relationshipTypeId: RelationshipTypeEnum.daughter,
  },
  {
    characterId: 2, // Spider-Girl
    relativeId: 1, // Spider-Man
    relationshipTypeId: RelationshipTypeEnum.father,
  },
  {
    characterId: 19, // Invisible Woman
    relativeId: 21, // Human Torch
    relationshipTypeId: RelationshipTypeEnum.brother
  },
  {
    characterId: 21, // Human Torch
    relativeId: 19, // Invisible Woman
    relationshipTypeId: RelationshipTypeEnum.sister
  },
  {
    characterId: 19, // Invisible Woman
    relativeId: 20, // Mister Fantastic
    relationshipTypeId: RelationshipTypeEnum.husband
  },
  {
    characterId: 20, // Mister Fantastic
    relativeId: 19, // Invisible Woman
    relationshipTypeId: RelationshipTypeEnum.wife
  },
];
