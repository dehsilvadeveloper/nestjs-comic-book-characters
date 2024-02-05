import { registerDecorator, ValidationOptions } from 'class-validator';
import { ExistsOnDatabaseValidator } from '../rules/exists-on-database.rule';

interface existsOnDatabaseOptions {
  model: string;
  column: string;
}

/**
 * Check if the value already exists for a entity on database.
 * Usage:
 *   export class CreateCharacterDto {
 *     @ExistsOnDatabase({ model: 'marital_status', column: 'id' })
 *     powers: number[];
 *   }
 */
export function ExistsOnDatabase(
  existsOnDatabaseOptions: existsOnDatabaseOptions,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [existsOnDatabaseOptions],
      validator: ExistsOnDatabaseValidator,
    });
  };
}
