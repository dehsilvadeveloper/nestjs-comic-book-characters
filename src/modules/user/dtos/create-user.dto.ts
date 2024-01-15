import { IsOptional, IsNotEmpty, MaxLength, MinLength, IsString, IsEmail } from 'class-validator';
import { IsUnique } from '@modules/common/decorators/is-unique.decorator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(70)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(6)
  @MaxLength(70)
  @IsUnique({ model: 'user', column: 'email' }, { message: 'email provided already exists' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
