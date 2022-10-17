import type { Mocks } from './index.d';
import type { ResponseData } from '../../utils/request/index.d';
import Mock from 'mockjs';
import { autoImportMocks } from '../../utils/auto';

Mock.setup({
  timeout: '200-600',
});

const mocks: Mocks = autoImportMocks(
  import.meta.glob('./modules/**/*.ts', {
    import: 'default',
    eager: true,
  })
);

const useMock = (): void => {
  Object.keys(mocks).forEach((key: string) => {
    Mock.mock(
      new RegExp(mocks[key].url),
      mocks[key].method,
      <T>(data: any): ResponseData<T> => {
        let res: ResponseData<T> = {
          code: 0,
          msg: 'success',
          data: mocks[key].data,
        };
        if (mocks[key].response) {
          res = mocks[key].response(data, res);
        }
        return res;
      }
    );
  });
};

export { mocks, useMock };
