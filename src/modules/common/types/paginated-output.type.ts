export type PaginatedOutputType<T> = {
  meta: {
    total: number;
    pageSize: number;
    lastPage: number;
    currentPage: number;
    prevPage: number | null;
    nextPage: number | null;
  };
  data: T[];
};
