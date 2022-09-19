import Mock from 'mockjs';
import auth from './admin/auth';
import user from './website/user';
import base from './base';
import type { IObject } from '#/interface.d';
import type { ResponseData } from '#/app/app-request.d';

/**
 * 设置延迟时间
 */
Mock.setup({
  timeout: '200-600',
});

/**
 * 组装模拟接口
 */
const mocks: IObject = { ...auth, ...user, ...base };

/**
 * 导出自动挂载模拟接口方法
 */
export default (): void => {
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
