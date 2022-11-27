import type { IObject } from '@/types/global.d';
import type { Options, QueryOptions, Pagination } from './use-crud.d';
import type { ResponseData } from '@/utils/request/index.d';
import { mergeValueByKey } from '@/utils/common';
import { GET } from '@/utils/request';

/**
 * @name useCrud
 * @description 通用业务处理及增删改查钩子函数
 * @return queryForm 查询表单
 * @return pageForm 分页表单
 * @return tableData 表格数据
 * @return query 查询方法
 * @return reset 重置查询方法
 */
export const useCrud = (options?: Options) => {
  const queryOptions: QueryOptions = mergeValueByKey(
    {
      queryOnSetup: true,
      queryOnActivated: false,
      queryOnMounted: false,
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

  const query = async <T>(): Promise<any | ResponseData<T> | undefined> => {
    if (!queryOptions.queryUrl) return;
    const res = await GET(
      queryOptions.queryUrl,
      Object.assign(queryForm.value, pageForm.value)
    );
    if (res.code === 0) {
      tableData.value = res.data.list;
      pageOptions.total = res.data.total;
    }
  };

  if (
    queryOptions.queryOnSetup &&
    !queryOptions.queryOnActivated &&
    !queryOptions.queryOnMounted
  ) {
    query();
  }

  onMounted(() => {
    if (
      !queryOptions.queryOnSetup &&
      !queryOptions.queryOnActivated &&
      queryOptions.queryOnMounted
    ) {
      query();
    }
  });

  onActivated(() => {
    if (
      !queryOptions.queryOnSetup &&
      queryOptions.queryOnActivated &&
      !queryOptions.queryOnMounted
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
