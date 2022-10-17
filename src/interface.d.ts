export interface IObject<T = any> {
  [key: string]: T;
}

export interface IFunction<T = any> {
  (x?: any): T;
}

type Callback = (data?: any) => void;

interface RouteMeta {
  layout: string;
  isAdmin: boolean;
  requiresAuth: boolean;
  iconType: string;
  icon: string;
  menuName: string;
  sort: number;
  externalPage: boolean;
  externalPageUrl: string;
}
