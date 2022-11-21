import type { IObject } from '../../global.d';
import type { Pagination } from './index.d';

/**
 * @name useCrud
 * @description 通用业务处理及增删改查钩子函数
 */
export const useCrud = () => {
  const defaultPagination: Pagination = {
    page: 1,
    limit: 10,
    total: 0,
  };

  const queryForm = ref<IObject | any>({});

  const paginationForm = ref<Pagination>(defaultPagination);

  const list = ref<Array<any>>([]);

  const reset = () => {
    queryForm.value = {};
    paginationForm.value = defaultPagination;
  };

  const query = () => {};

  return {
    queryForm,
    paginationForm,
    list,
    query,
    reset,
  };
};
