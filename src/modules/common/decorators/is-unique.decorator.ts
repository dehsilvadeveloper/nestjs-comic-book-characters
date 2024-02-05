import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueValidator } from '../rules/is-unique.rule';

interface isUniqueOptions {
  model: string;
  column: string;
}

/**
 * Check if the value is unique for a entity on database.
 * Usage:
 *   export class CreateCharacterDto {
 *     @IsUnique({ model: 'user', column: 'email' }, { message: 'email provided already exists' })
 *     powers: number[];
 *   }
 */
export function IsUnique(isUniqueOptions: isUniqueOptions, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [isUniqueOptions],
      validator: IsUniqueValidator,
    });
  };
}
