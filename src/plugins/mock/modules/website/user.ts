import type { ResponseData } from '../../../../utils/request/index.d';
import type { IObject } from '../../../../global.d';
import { interceptJointData } from '../../../../utils/common';
import { AuthenticationEnum } from '../../../../enums';

export default {
  /**
   * 账号密码登录
   */
  loginByAccount: {
    url: '/admin/user/login',
    method: 'post',
    data: AuthenticationEnum.VISITOR_TOKEN,
    response: <T>(data: IObject, res: ResponseData<T>) => {
      if (
        interceptJointData(data.body).password !==
        AuthenticationEnum.VISITOR_PASSWORD
      ) {
        return {
          ...res,
          code: 10039,
          msg: null,
          data: '',
        };
      }
      return res;
    },
  },

  /**
   * 获取用户信息
   */
  getUserInfo: {
    url: '/admin/user/info',
    method: 'get',
    data: {
      id: '',
      username: AuthenticationEnum.VISITOR_USERNAME,
      nickname: '演示用户',
      avatar:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      sex: 1,
      email: '',
      phone: '',
    },
  },

  /**
   * 注册
   */
  signup: {
    url: '/admin/user/signup',
    method: 'post',
    data: '',
  },
};
