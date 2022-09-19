export interface IObject<T = any> {
  [key: string]: T;
}

export interface IFunction<T = any> {
  (x?: any): T;
}

type Callback = (data?: any) => void;

type I18nT = (key: string, params?: IObject | Array<string>) => string;
