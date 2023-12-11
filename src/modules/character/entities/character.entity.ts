import { AlignmentEntity } from '@modules/common/entities/alignment.entity';
import { MaritalStatusEntity } from '@modules/common/entities/marital-status.entity';
import { LivingStatusEntity } from '@modules/common/entities/living-status.entity';
import { PowerEntity } from '@modules/power/entities/power.entity';
import { TeamEntity } from '@modules/team/entities/team.entity';

export class CharacterEntity {
  id: number;
  name: string;
  civilName: string | null;
  gender: string;
  alignment: AlignmentEntity;
  maritalStatus: MaritalStatusEntity;
  livingStatus: LivingStatusEntity;
  powers: PowerEntity[] | null;
  teams: TeamEntity[] | null;
  createdAt: Date;
  updatedAt: Date;
}
