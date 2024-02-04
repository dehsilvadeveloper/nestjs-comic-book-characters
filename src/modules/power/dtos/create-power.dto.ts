import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreatePowerDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;
}
