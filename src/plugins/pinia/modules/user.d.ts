import { IObject } from '@/interface.d';

export interface UserState {
  stayLogin: boolean;
  token: string;
  userInfo: IObject;
  userRoles: Array<T>;
}
