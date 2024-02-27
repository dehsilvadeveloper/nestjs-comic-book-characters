import { ApiProperty } from '@nestjs/swagger';
import { TeamMemberRole, TeamMemberStatus } from '@prisma/client';

export class CharacterTeamType {
  @ApiProperty({
    type: Number,
    description: 'Team ID.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Team name.',
    example: 'Avengers',
  })
  name: string;

  @ApiProperty({
    enum: TeamMemberStatus,
    description: 'The situation of the character as a member of the team.',
  })
  status: string;

  @ApiProperty({
    enum: TeamMemberRole,
    description: 'The type of membership inside of the team.',
  })
  role: string;
}
