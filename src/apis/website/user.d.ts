import type { LoginForm, PhoneForm } from '@/views/common';

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
