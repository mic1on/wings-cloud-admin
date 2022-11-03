import type { LoginForm, PhoneForm } from '@/views/website/user/index.d';

export interface LoginAccountData extends LoginForm {
  username: string;
  password: string;
}

export interface SignupData extends PhoneForm {
  password: string;
}

export interface PhoneCodeParams {
  phone: string | number;
  type: number;
}
