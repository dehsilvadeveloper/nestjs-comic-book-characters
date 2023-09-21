import { GenderEnum } from '@common/enums/gender.enum';
import { AlignmentEntity } from '@common/entities/alignment.entity';
import { MaritalStatusEntity } from '@common/entities/marital-status.entity';
import { LivingStatusEntity } from '@common/entities/living-status.entity';

export class CharacterEntity {
  name: string;
  civilName: string | null;
  gender: GenderEnum;
  alignment: AlignmentEntity;
  maritalStatus: MaritalStatusEntity;
  livingStatus: LivingStatusEntity;
  createdAt: Date;
  updatedAt: Date;
}
