import { LivingStatusStringEnum } from '../../../src/modules/living-status/enums/living-status-string.enum';
import { LivingStatusEnum } from '../../../src/modules/living-status/enums/living-status.enum';

export const livingStatusSeederData = [
  { id: LivingStatusEnum.alive, name: LivingStatusStringEnum.alive },
  { id: LivingStatusEnum.deceased, name: LivingStatusStringEnum.deceased },
];
