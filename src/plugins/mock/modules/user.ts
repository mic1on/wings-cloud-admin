import type { ResponseData } from '@/utils/request/index.d';
import type { IObject } from '@/global.d';
import { interceptJointData } from '@/utils/common';
import { AuthenticationEnum } from '@/enums';

export default {
  /**
   * 获取手机号验证码
   */
  getPhoneCode: {
    url: '/admin/user/phoneCode',
    method: 'get',
    data: '',
  },

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
    url: '/admin/user/profile',
    method: 'get',
    data: {
      id: '',
      username: AuthenticationEnum.VISITOR_USERNAME,
      nickname: '演示用户',
      avatar: '',
      sex: 1,
      email: '',
      phone: '',
      roleList: [
        { label: 'dict.role.admin', id: 1 },
        { label: 'dict.role.development', id: 2 },
      ],
      defaultRole: 1,
      currentRole: 1,
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
