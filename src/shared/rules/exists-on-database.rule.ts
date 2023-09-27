import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { RepositoryService } from '@modules/common/services/repository.service';

@Injectable()
@ValidatorConstraint({ name: 'existsOnDatabase', async: true })
export class ExistsOnDatabaseValidator implements ValidatorConstraintInterface {
  constructor(private readonly repositoryService: RepositoryService) {}

  async validate(value: any, args: ValidationArguments) {
    const [property] = args.constraints;
    const { model: modelName, column: columnName } = property;

    const repository = this.repositoryService.getRepositoryByModelName(modelName);
    const entity = await repository.findFirst(value);

    return !!entity;
  }

  defaultMessage(args: ValidationArguments) {
    const [property] = args.constraints;
    const { model: modelName, column: columnName } = property;
    return `model ${modelName} with the ${columnName} provided does not exist on the database.`;
  }
}
