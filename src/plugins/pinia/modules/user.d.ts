import type { IObject } from '../../../global.d';

export interface UserState {
  stayLogin: boolean;
  token: string;
  userInfo: IObject;
  userRoles: Array<T>;
}
