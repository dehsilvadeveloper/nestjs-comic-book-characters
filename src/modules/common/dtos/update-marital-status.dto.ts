import { PartialType } from '@nestjs/mapped-types';
import { CreateMaritalStatusDto } from './create-marital-status.dto';

export class UpdateMaritalStatusDto extends PartialType(CreateMaritalStatusDto) {}
