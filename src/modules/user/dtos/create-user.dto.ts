import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty, MaxLength, MinLength, IsString, IsEmail } from 'class-validator';
import { IsUnique } from '@modules/common/decorators/is-unique.decorator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    minLength: 2,
    maxLength: 70,
    description: 'User name.',
    required: false,
    example: 'Generic App 1',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(70)
  name: string;

  @ApiProperty({
    type: String,
    description: 'User e-mail.',
    example: 'generic_1@app.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(6)
  @MaxLength(70)
  @IsUnique({ model: 'user', column: 'email' }, { message: 'email provided already exists' })
  email: string;

  @ApiProperty({
    type: String,
    description: 'User password.',
    example: 'iamapassword',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
