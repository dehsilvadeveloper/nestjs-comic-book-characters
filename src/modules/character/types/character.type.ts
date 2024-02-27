import { ApiProperty } from '@nestjs/swagger';
import { CharacterRelativeType } from "./character-relative.type";
import { CharacterAllyType } from "./character-ally.type";
import { CharacterEnemyType } from "./character-enemy.type";
import { CharacterTeamType } from "./character-team.type";
import { AlignmentStringEnum } from '@modules/common/enums/alignment-string.enum';
import { GenderStringEnum } from '@modules/common/enums/gender-string.enum';
import { LivingStatusStringEnum } from '@modules/common/enums/living-status-string.enum';
import { MaritalStatusStringEnum } from '@modules/common/enums/marital-status-string.enum';

export class CharacterType {
  @ApiProperty({
    type: Number,
    description: 'Character ID.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Character name.',
    example: 'Spider-man',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Character civil name.',
    nullable: true,
    example: 'Peter Benjamin Parker',
  })
  civilName: string | null;

  @ApiProperty({
    enum: GenderStringEnum,
    description: 'Character gender.',
    example: 'male',
  })
  gender: string;

  @ApiProperty({
    enum: AlignmentStringEnum,
    description: 'Character aligment.',
    example: "good",
  })
  alignment: string;

  @ApiProperty({
    enum: MaritalStatusStringEnum,
    description: 'Character marital status.',
    example: "single",
  })
  maritalStatus: string;

  @ApiProperty({
    enum: LivingStatusStringEnum,
    description: 'Character living status.',
    example: "alive",
  })
  livingStatus: string;

  @ApiProperty({
    type: [String],
    description: 'Character powers.',
    example: ['Superhuman Agility', 'Superhuman Strength']
  })
  powers: string[];

  @ApiProperty({
    type: CharacterTeamType,
    isArray: true,
    description: 'An array of character team objects.'
  })
  teams: CharacterTeamType[];

  @ApiProperty({
    type: CharacterRelativeType,
    isArray: true,
    description: 'An array of character relative objects.'
  })
  relatives: CharacterRelativeType[];

  @ApiProperty({
    type: CharacterAllyType,
    isArray: true,
    description: 'An array of character allies objects.'
  })
  allies: CharacterAllyType[];

  @ApiProperty({
    type: CharacterEnemyType,
    isArray: true,
    description: 'An array of character enemies objects.'
  })
  enemies: CharacterEnemyType[];

  @ApiProperty({
    type: String,
    format: 'date-time',
    description: 'Date and time when the character was created.',
    example: '2023-12-19T15:00:55.036Z',
  })
  createdAt: string;

  @ApiProperty({
    type: String,
    format: 'date-time',
    description: 'Date and time when the character was last updated.',
    example: '2023-12-19T15:00:55.036Z',
  })
  updatedAt: string;
};
