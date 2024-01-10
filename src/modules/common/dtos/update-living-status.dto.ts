import { PartialType } from '@nestjs/mapped-types';
import { CreateLivingStatusDto } from './create-living-status.dto';

export class UpdateLivingStatusDto extends PartialType(CreateLivingStatusDto) {}
