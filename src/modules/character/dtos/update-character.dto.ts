import { Transform } from 'class-transformer';
import { IsOptional, MaxLength, MinLength, IsEnum, IsString, IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GenderStringEnum } from '@modules/common/enums/gender-string.enum';
import { ExistsOnDatabase } from '@modules/common/decorators/exists-on-database.decorator';

export class UpdateCharacterDto {
  @ApiProperty({
    type: String,
    description: 'Character name.',
    required: false,
    example: 'Spider-man',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name?: string;

  @ApiProperty({
    type: String,
    description: 'Character civil name.',
    required: false,
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
    required: false,
    example: 'male',
  })
  @IsOptional()
  @IsString()
  @IsEnum(GenderStringEnum)
  gender?: GenderStringEnum;

  @ApiProperty({
    type: Number,
    description: 'Aligment ID.',
    required: false,
    example: 4,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'alignment', column: 'id' }, { message: 'alignment provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  alignmentId?: number;

  @ApiProperty({
    type: Number,
    description: 'Marital status ID.',
    required: false,
    example: 3,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'marital_status', column: 'id' }, { message: 'marital status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  maritalStatusId?: number;

  @ApiProperty({
    type: Number,
    description: 'Living status ID.',
    required: false,
    example: 2,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  @ExistsOnDatabase({ model: 'living_status', column: 'id' }, { message: 'living status provided does not exists' })
  @Transform(({ value }) => parseInt(value))
  livingStatusId?: number;
}
