import { AlignmentEntity } from '@shared/entities/alignment.entity';
import { MaritalStatusEntity } from '@shared/entities/marital-status.entity';
import { LivingStatusEntity } from '@shared/entities/living-status.entity';

export class CharacterEntity {
  id: number;
  name: string;
  civilName: string | null;
  gender: string;
  alignment: AlignmentEntity;
  maritalStatus: MaritalStatusEntity;
  livingStatus: LivingStatusEntity;
  createdAt: Date;
  updatedAt: Date;
}
