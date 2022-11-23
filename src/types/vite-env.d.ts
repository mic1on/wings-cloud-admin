/// <reference types="vite/client" />

import { RouteLocationRaw } from 'vue-router';

interface ImportMetaEnv {
  readonly VITE_MODE: string;
  readonly VITE_REQUEST_URL: string;
  readonly VITE_SOCKET_URL: string;
  readonly VITE_G_ZIP: boolean;
  readonly APP_TITLE: string;
  readonly APP_REQUEST_URL: string;
  readonly APP_SOCKET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
