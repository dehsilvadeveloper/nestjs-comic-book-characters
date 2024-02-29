import { Transform, Type } from 'class-transformer';
import { AlignmentEntity } from '@modules/alignment/entities/alignment.entity';
import { MaritalStatusEntity } from '@modules/marital-status/entities/marital-status.entity';
import { LivingStatusEntity } from '@modules/living-status/entities/living-status.entity';
import { PowerEntity } from '@modules/power/entities/power.entity';
import { CharacterRelativeEntity } from './character-relative.entity';
import { CharacterAllyEntity } from './character-ally.entity';
import { CharacterEnemyEntity } from './character-enemy.entity';
import { CharacterTeamEntity } from './character-team.entity';

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
  @Type(() => CharacterTeamEntity)
  teams: CharacterTeamEntity[] | null;
  @Type(() => CharacterRelativeEntity)
  relatives: CharacterRelativeEntity[] | null;
  @Type(() => CharacterAllyEntity)
  allies: CharacterAllyEntity[] | null;
  @Type(() => CharacterEnemyEntity)
  enemies: CharacterEnemyEntity[] | null;
  createdAt: Date;
  updatedAt: Date;
}
