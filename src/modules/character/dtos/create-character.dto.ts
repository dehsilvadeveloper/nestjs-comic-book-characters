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
import { GenderNameEnum } from '@modules/common/enums/gender-name.enum';
import { AreArrayValuesUnique } from '@modules/common/decorators/are-array-values-unique.decorator';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';
import { CharacterTeamDto } from './character-team.dto';
import { CharacterRelativeDto } from './character-relative.dto';

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  civilName?: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(GenderNameEnum)
  gender: GenderNameEnum;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'alignment provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  alignmentId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'marital_status', column: 'id' }, { message: 'marital status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  maritalStatusId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'living_status', column: 'id' }, { message: 'living status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  livingStatusId: number;

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

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterTeamDto)
  teams?: CharacterTeamDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterRelativeDto)
  relatives?: CharacterRelativeDto[];

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
