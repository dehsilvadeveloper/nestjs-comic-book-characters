import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateAlignmentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;
}
