import type { LoginForm, PhoneForm } from '@/pages/sign.d';
import type { Pagination } from '@/hooks/use-crud/use-crud.d';

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
