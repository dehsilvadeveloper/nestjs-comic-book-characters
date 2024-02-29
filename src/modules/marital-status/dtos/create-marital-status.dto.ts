import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateMaritalStatusDto {
  @ApiProperty({
    type: String,
    description: 'Marital status name.',
    example: 'single',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;
}
