import { config } from '@config/config';
import { SortOrderEnum } from '../enums/list_options/sort-order.enum';

export interface SortingOptionsParams {
  sortBy?: string | null;
  sortOrder?: string | null;
}

export class SortingOptions {
  private _sortBy: string;
  private _sortOrder: string;

  constructor(params: SortingOptionsParams) {
    this.setSortBy(params);
    this.setSortOrder(params);
  }

  public get sortBy(): string {
    return this._sortBy;
  }

  public get sortOrder(): string {
    return this._sortOrder;
  }

  public get orderBy(): { [x: string]: string } {
    return {
      [this.sortBy as string]: this.sortOrder,
    };
  }

  private setSortBy(params: SortingOptionsParams): void {
    this._sortBy = params.sortBy || 'id';
  }

  private setSortOrder(params: SortingOptionsParams): void {
    this._sortOrder = params.sortOrder || config().sorting.sortOrder;

    this.validateSortOrder();
  }

  private validateSortOrder(): void {
    const allowedSortOrder = Object.values<string>(SortOrderEnum);

    if (!allowedSortOrder.includes(this._sortOrder)) {
      throw new Error('The property sortOrder must be one of the following values: ' + allowedSortOrder.toString());
    }
  }
}
