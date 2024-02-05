import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@Injectable()
@ValidatorConstraint({ name: 'areArrayValuesUnique', async: true })
export class AreArrayValuesUniqueValidator implements ValidatorConstraintInterface {
  validate(value: any[], args: ValidationArguments): boolean {
    return !((new Set(value)).size !== value.length);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must not contain duplicate values`;
  }
}
