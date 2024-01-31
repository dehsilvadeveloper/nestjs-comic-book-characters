import { Transform } from 'class-transformer';
import { IsOptional, IsInt, IsNotEmpty, IsString, Min, Max, IsEnum, IsPositive } from 'class-validator';
import { SortOrderEnum } from '../../enums/list_options/sort-order.enum';

export class ListOptionsDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(1)
  @Transform(({ value }) => parseInt(value))
  page?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Min(1)
  @Max(60)
  @Transform(({ value }) => parseInt(value))
  pageSize?: number;

  @IsOptional()
  @IsString()
  sortBy?: string;

  @IsOptional()
  @IsString()
  @IsEnum(SortOrderEnum)
  sortOrder?: string;
}
