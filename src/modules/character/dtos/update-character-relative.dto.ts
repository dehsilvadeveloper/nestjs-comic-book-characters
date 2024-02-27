import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CharacterRelativeDto } from './character-relative.dto';

export class UpdateCharacterRelativeDto {
  @ApiProperty({
    type: CharacterRelativeDto,
    isArray: true,
    description: 'An array of character relative objects.'
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterRelativeDto)
  relatives: CharacterRelativeDto[];
}
