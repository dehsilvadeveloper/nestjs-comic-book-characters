import { PartialType } from '@nestjs/mapped-types';
import { CreateAlignmentDto } from './create-alignment.dto';

export class UpdateAlignmentDto extends PartialType(CreateAlignmentDto) {}
