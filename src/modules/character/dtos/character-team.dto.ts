import { IsNotEmpty, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TeamMemberRole, TeamMemberStatus } from '@prisma/client';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class CharacterTeamDto {
  @ApiProperty({
    type: Number,
    description: 'Team ID.',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'team', column: 'id' })
  teamId: number;

  @ApiProperty({
    enum: TeamMemberStatus,
    description: 'The situation of the character as a member of the team.',
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(TeamMemberStatus)
  status: TeamMemberStatus;

  @ApiProperty({
    enum: TeamMemberRole,
    description: 'The type of membership inside of the team.',
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(TeamMemberRole)
  role: TeamMemberRole;
}
