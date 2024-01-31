import { PaginatedOutputType } from '@modules/common/types/paginated-output.type';
import { PaginationOptions } from '@modules/common/value_objects/pagination-options';
import { SortingOptions } from '@modules/common/value_objects/sorting-options';

export abstract class BaseRepositoryInterface<Entity, CreateDto, UpdateDto, FilterDto> {
  abstract create(payload: CreateDto): Promise<Entity>;
  abstract update(id: number, payload: UpdateDto): Promise<Entity>;
  abstract delete(id: number): Promise<boolean>;
  abstract getAll(): Promise<Entity[]>;
  abstract getByField(field: string, value: any): Promise<Entity[]>;
  abstract getWhere(
    paginationOptions: PaginationOptions,
    sortingOptions: SortingOptions,
  ): Promise<PaginatedOutputType<Entity>>;
  abstract firstById(id: number): Promise<Entity | null>;
  abstract firstByField(field: string, value: any): Promise<Entity | null>;
  abstract firstWhere(where: FilterDto): Promise<Entity | null>;
}
