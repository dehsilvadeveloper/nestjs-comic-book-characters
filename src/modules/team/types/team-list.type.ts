import { ApiProperty } from '@nestjs/swagger';
import { TeamType } from './team.type';

export class TeamListType {
  @ApiProperty({
    type: TeamType,
    isArray: true,
    description: 'An array of team objects.',
  })
  teams: TeamType[];
}
