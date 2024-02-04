import { PartialType } from '@nestjs/mapped-types';
import { CreatePowerDto } from './create-power.dto';

export class UpdatePowerDto extends PartialType(CreatePowerDto) {}
