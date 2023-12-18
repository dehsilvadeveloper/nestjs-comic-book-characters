import { Transform, Type } from 'class-transformer';
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
  @Type(() => AlignmentEntity)
  alignment: AlignmentEntity;
  @Type(() => MaritalStatusEntity)
  maritalStatus: MaritalStatusEntity;
  @Type(() => LivingStatusEntity)
  livingStatus: LivingStatusEntity;
  @Type(() => PowerEntity)
  @Transform(({ value }) => value.map(powerItem => powerItem.power))
  powers: PowerEntity[] | null;
  @Type(() => TeamEntity)
  @Transform(({ value }) => value.map(teamItem => teamItem.team))
  teams: TeamEntity[] | null;
  createdAt: Date;
  updatedAt: Date;
}
