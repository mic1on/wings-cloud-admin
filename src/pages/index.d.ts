export interface LoginForm {
  remember: boolean;
  type: number;
}

export interface PhoneForm {
  areaCode: string;
  phone: string;
  code: string;
}

export interface PasswordForm {
  password: string;
  passwordAgain: string;
}

export interface EmailCodeForm {
  email: string;
  code: string;
}

export interface LoginAccountForm extends LoginForm {
  username: string;
  password: string;
}

export interface LoginPhoneForm extends LoginForm, PhoneForm {}

export interface LoginEmailForm extends LoginForm, EmailCodeForm {}

export interface SignupAccountForm extends PhoneForm, PasswordForm {
  username: string;
  nickname: string;
}

export interface PasswordRetrieveForm extends PhoneForm, PasswordForm {}
