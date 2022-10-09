import type { IObject } from '#/interface.d';
import type { ResponseData } from '#/app/app-request.d';
import Mock from 'mockjs';

Mock.setup({
  timeout: '200-600',
});

const files: IObject = import.meta.glob('./modules/**/*.ts', {
  import: 'default',
  eager: true,
});

let mocks: IObject = {};

Object.keys(files).forEach((key) => {
  mocks = { ...mocks, ...files[key] };
});

const useMock = (): void => {
  Object.keys(mocks).forEach((key: string) => {
    Mock.mock(
      new RegExp(mocks[key].url),
      mocks[key].method,
      <T>(data: IObject): ResponseData<T> => {
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
