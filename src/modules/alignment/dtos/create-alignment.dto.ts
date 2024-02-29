import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateAlignmentDto {
  @ApiProperty({
    type: String,
    description: 'Alignment name.',
    example: 'good',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;
}
