import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: String,
    minLength: 6,
    maxLength: 70,
    description: 'The e-mail of the user.',
    example: 'generic_1@app.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @MinLength(6)
  @MaxLength(70)
  email: string;

  @ApiProperty({
    type: String,
    minLength: 6,
    description: 'The password of the user.',
    example: 'iamapassword',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
