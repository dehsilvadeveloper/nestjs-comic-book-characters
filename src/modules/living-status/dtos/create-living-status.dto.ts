import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateLivingStatusDto {
  @ApiProperty({
    type: String,
    description: 'Living status name.',
    example: 'alive',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;
}
