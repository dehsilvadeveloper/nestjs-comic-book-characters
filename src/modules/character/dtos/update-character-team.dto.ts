import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { CharacterTeamDto } from './character-team.dto';

export class UpdateCharacterTeamDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterTeamDto)
  teams: CharacterTeamDto[];
}
