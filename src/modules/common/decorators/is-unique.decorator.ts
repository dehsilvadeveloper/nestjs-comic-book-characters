import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueValidator } from '../rules/is-unique.rule';

interface isUniqueOptions {
  model: string;
  column: string;
}

export function IsUnique(
  isUniqueOptions: isUniqueOptions,
  validationOptions?: ValidationOptions,
) {
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
