export interface Options extends QueryOptions, Pagination {}

export interface QueryOptions {
  queryBySetup?: boolean;
  queryByActivated?: boolean;
  queryByMounted?: boolean;
  queryUrl?: string;
  deleteUrl?: string;
  deleteKey?: string;
  exportUrl?: string;
  importUrl?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}
