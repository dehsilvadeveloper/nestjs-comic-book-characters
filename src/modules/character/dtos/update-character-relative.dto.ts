import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { CharacterRelativeDto } from './character-relative.dto';

export class UpdateCharacterRelativeDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterRelativeDto)
  relatives: CharacterRelativeDto[];
}
