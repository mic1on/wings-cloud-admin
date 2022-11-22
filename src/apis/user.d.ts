import type { LoginForm, PhoneForm } from '@/pages/index.d';

export interface LoginAccountData extends LoginForm {
  username: string;
  password: string;
}

export interface SignupData extends PhoneForm {
  password: string;
}

export interface ValidateUsernameParams {
  username: string;
}
