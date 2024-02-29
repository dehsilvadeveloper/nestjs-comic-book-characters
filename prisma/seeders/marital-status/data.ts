import { MaritalStatusStringEnum } from '../../../src/modules/marital-status/enums/marital-status-string.enum';
import { MaritalStatusEnum } from '../../../src/modules/marital-status/enums/marital-status.enum';

export const maritalStatusSeederData = [
  { id: MaritalStatusEnum.single, name: MaritalStatusStringEnum.single },
  { id: MaritalStatusEnum.married, name: MaritalStatusStringEnum.married },
  { id: MaritalStatusEnum.engaged, name: MaritalStatusStringEnum.engaged },
  { id: MaritalStatusEnum.separated, name: MaritalStatusStringEnum.separated },
  { id: MaritalStatusEnum.divorced, name: MaritalStatusStringEnum.divorced },
  { id: MaritalStatusEnum.widowed, name: MaritalStatusStringEnum.widowed },
];
