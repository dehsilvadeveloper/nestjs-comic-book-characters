import { config } from '@config/config';

export interface PaginationOptionsParams {
  page?: number | null;
  pageSize?: number | null;
}

export class PaginationOptions {
  private _page: number;
  private _pageSize: number;

  constructor(params: PaginationOptionsParams) {
    this.setPage(params);
    this.setPageSize(params);
  }

  public get page(): number {
    return this._page;
  }

  public get pageSize(): number {
    return this._pageSize;
  }

  public get take(): number {
    return this.pageSize;
  }

  public get skip(): number {
    return (this.page - 1) * this.pageSize;
  }

  private setPage(params: PaginationOptionsParams): void {
    this._page = params.page || 1;

    this.validatePage();
  }

  private setPageSize(params: PaginationOptionsParams): void {
    this._pageSize = params.pageSize || config().pagination.pageSize;

    this.validatePageSize();
  }

  private validatePage(): void {
    if (!Number.isInteger(this._page)) {
      throw new Error('The property page must be a integer number.');
    }

    if (Math.sign(this._page) === -1) {
      throw new Error('The property page must be a positive number.');
    }

    if (this._page < 1) {
      throw new Error('The property page must not be less than 1.');
    }
  }

  private validatePageSize(): void {
    if (!Number.isInteger(this._pageSize)) {
      throw new Error('The property pageSize must be a integer number.');
    }

    if (Math.sign(this._pageSize) === -1) {
      throw new Error('The property pageSize must be a positive number.');
    }

    if (this._pageSize < 1) {
      throw new Error('The property pageSize must not be less than 1.');
    }

    if (this._pageSize > 60) {
      throw new Error('The property pageSize must not be greater than 60.');
    }
  }
}
