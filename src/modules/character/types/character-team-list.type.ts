import { ApiProperty } from '@nestjs/swagger';
import { CharacterTeamType } from './character-team.type';

export class CharacterTeamListType {
  @ApiProperty({
    type: CharacterTeamType,
    isArray: true,
    description: 'An array of character team objects.'
  })
  teams: CharacterTeamType[];
}