import { Transform, Type } from 'class-transformer';
import {
  IsOptional,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsEnum,
  IsString,
  IsInt,
  IsPositive,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GenderStringEnum } from '@modules/common/enums/gender-string.enum';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';
import { CharacterTeamDto } from './character-team.dto';
import { CharacterRelativeDto } from './character-relative.dto';

export class CreateCharacterDto {
  @ApiProperty({
    type: String,
    description: 'Character name.',
    example: 'Spider-man',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiProperty({
    type: String,
    description: 'Character civil name.',
    required: false,
    nullable: true,
    example: 'Peter Benjamin Parker',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  civilName?: string;

  @ApiProperty({
    enum: GenderStringEnum,
    description: 'Character gender.',
    example: 'male',
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(GenderStringEnum)
  gender: GenderStringEnum;

  @ApiProperty({
    type: Number,
    description: 'Aligment ID.',
    example: 4,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'alignment provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  alignmentId: number;

  @ApiProperty({
    type: Number,
    description: 'Marital status ID.',
    example: 3,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'marital_status', column: 'id' }, { message: 'marital status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  maritalStatusId: number;

  @ApiProperty({
    type: Number,
    description: 'Living status ID.',
    example: 2,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'living_status', column: 'id' }, { message: 'living status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  livingStatusId: number;

  @ApiProperty({
    type: [Number],
    description: 'An array of powers IDs.',
    required: false,
    example: [1, 9, 3],
  })
  @IsOptional()
  @IsArray()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'power', column: 'id' },
    { each: true, message: 'some of the powers provided does not exists' },
  )
  powers?: number[];

  @ApiProperty({
    type: CharacterTeamDto,
    isArray: true,
    required: false,
    description: 'An array of team objects.'
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterTeamDto)
  teams?: CharacterTeamDto[];

  @ApiProperty({
    type: CharacterRelativeDto,
    isArray: true,
    required: false,
    description: 'An array of relative objects.'
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterRelativeDto)
  relatives?: CharacterRelativeDto[];

  @ApiProperty({
    type: [Number],
    required: false,
    description: 'An array of allies IDs.',
    example: [1, 2]
  })
  @IsOptional()
  @IsArray()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'character', column: 'id' },
    { each: true, message: 'some of the allies provided does not exists' },
  )
  allies?: number[];

  @ApiProperty({
    type: [Number],
    required: false,
    description: 'An array of enemies IDs.',
    example: [33, 41]
  })
  @IsOptional()
  @IsArray()
  @AreArrayValuesUnique()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ExistsOnDatabase(
    { model: 'character', column: 'id' },
    { each: true, message: 'some of the enemies provided does not exists' },
  )
  enemies?: number[];
}
