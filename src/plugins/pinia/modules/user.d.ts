import type { IObject } from '../../../global';

export interface UserState {
  stayLogin: boolean;
  token: string;
  userInfo: IObject;
  userRoles: Array<T>;
}
