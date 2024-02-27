import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreatePowerDto {
  @ApiProperty({
    type: String,
    description: 'Power name.',
    example: 'Invisibility',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;
}
