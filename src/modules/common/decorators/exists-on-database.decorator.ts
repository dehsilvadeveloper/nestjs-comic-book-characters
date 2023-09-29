import { registerDecorator, ValidationOptions } from 'class-validator';
import { ExistsOnDatabaseValidator } from '../rules/exists-on-database.rule';

interface existsOnDatabaseOptions {
  model: string;
  column: string;
}

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
