import { SortingConfigProps } from './interfaces/config.interface';

export const sortingConfig = (): SortingConfigProps => ({
  sortOrder: process.env.SORTING_DEFAULT_ORDER || 'asc',
});
