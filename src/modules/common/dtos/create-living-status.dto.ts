import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class CreateLivingStatusDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;
}
