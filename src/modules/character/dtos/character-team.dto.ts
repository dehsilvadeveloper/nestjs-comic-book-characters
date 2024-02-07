import { IsNotEmpty, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';
import { TeamMemberRole, TeamMemberStatus } from '@prisma/client';

export class CharacterTeamDto {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'team', column: 'id' })
  teamId: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(TeamMemberStatus)
  status: TeamMemberStatus;

  @IsNotEmpty()
  @IsString()
  @IsEnum(TeamMemberRole)
  role: TeamMemberRole;
}
