import { registerDecorator, ValidationOptions } from 'class-validator';
import { AreArrayValuesUniqueValidator } from '../rules/are-array-values-unique.rule';

/**
 * Check if the values present in the array are unique.
 * Usage:
 *   export class CreateCharacterDto {
 *     @IsArrayValuesUnique()
 *     powers: number[];
 *   }
 */
export function AreArrayValuesUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: AreArrayValuesUniqueValidator,
    });
  };
}
