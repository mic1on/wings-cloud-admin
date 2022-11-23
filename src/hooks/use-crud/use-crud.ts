import type { IObject } from '@/types/global.d';
import type { Options, QueryOptions, Pagination } from './use-crud.d';
import { mergeValueByKey } from '@/utils/common';

/**
 * @name useCrud
 * @description 通用业务处理及增删改查钩子函数
 * @return queryForm
 * @return pageForm
 * @return tableData
 * @return query
 * @return reset
 */
export const useCrud = (options?: Options) => {
  const queryOptions: QueryOptions = mergeValueByKey(
    {
      queryBySetup: true,
      queryByActivated: false,
      queryByMounted: false,
      queryUrl: '',
      deleteUrl: '',
      deleteKey: '',
      exportUrl: '',
      importUrl: '',
    },
    options ? options : {}
  );

  const pageOptions: Pagination = mergeValueByKey(
    {
      page: 1,
      limit: 10,
      total: 0,
    },
    options ? options : {}
  );

  const queryForm = ref<IObject | any>({});

  const pageForm = ref<Pagination>(pageOptions);

  const tableData = ref<Array<any>>([]);

  const reset = () => {
    queryForm.value = {};
    pageForm.value = pageOptions;
  };

  const query = () => {
    console.log(queryOptions);
  };

  if (
    queryOptions.queryBySetup &&
    !queryOptions.queryByActivated &&
    !queryOptions.queryByMounted
  ) {
    query();
  }

  onMounted(() => {
    if (
      !queryOptions.queryBySetup &&
      !queryOptions.queryByActivated &&
      queryOptions.queryByMounted
    ) {
      query();
    }
  });

  onActivated(() => {
    if (
      !queryOptions.queryBySetup &&
      queryOptions.queryByActivated &&
      !queryOptions.queryByMounted
    ) {
      query();
    }
  });

  return {
    queryForm,
    pageForm,
    tableData,
    query,
    reset,
  };
};
