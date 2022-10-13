/// <reference types="vite/client" />

import { RouteLocationRaw } from 'vue-router';

interface ImportMetaEnv {
  readonly APP_NAME: string;
  readonly VITE_MODE: string;
  readonly VITE_REQUEST_URL: string;
  readonly VITE_SOCKET_URL: string;
  readonly VITE_G_ZIP: boolean;
  readonly APP_TITLE: string;
  readonly APP_REQUEST_URL: string;
  readonly APP_SOCKET_URL: string;
  readonly APP_REQUEST_TIMEOUT: number;
  readonly APP_FIRST_ROUTE: RouteLocationRaw;
  readonly APP_LOGIN_ROUTE: RouteLocationRaw;
  readonly APP_ADMIN_FIRST_ROUTE: RouteLocationRaw;
  readonly APP_DEFAULT_LANGUAGE: string;
  readonly APP_KEEP_ALIVE: boolean;
  readonly APP_LOGIN_TO_ADMIN: boolean;
  readonly APP_LOGIN_TYPE: string;
  readonly APP_DARK: boolean;
  readonly APP_STOREAGE_PREFIX: string;
  readonly APP_STOREAGE_TYPE: string;
  readonly APP_COPYRIGHT: string;
  readonly APP_MOBILE_AREA_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
