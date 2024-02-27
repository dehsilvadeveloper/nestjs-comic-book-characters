import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CharacterTeamDto } from './character-team.dto';

export class UpdateCharacterTeamDto {
  @ApiProperty({
    type: CharacterTeamDto,
    isArray: true,
    description: 'An array of character team objects.'
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterTeamDto)
  teams: CharacterTeamDto[];
}
