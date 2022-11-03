import type { IObject } from '../../global.d';
import type { Pagination } from './index.d';

/**
 * @name useCrud
 * @description 通用业务处理及增删改查钩子函数
 */
export const useCrud = () => {
  const query = ref<IObject | any>({});

  const pagination = ref<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
  });

  const list = ref<Array<any>>([]);

  return {
    query,
    pagination,
    list,
  };
};
