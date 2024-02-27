import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({
    type: String,
    description: 'Team name.',
    example: 'Fantastic Four',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;
}
