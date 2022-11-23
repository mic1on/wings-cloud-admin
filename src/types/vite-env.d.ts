/// <reference types="vite/client" />

import { RouteLocationRaw } from 'vue-router';

interface ImportMetaEnv {
  readonly VITE_MODE: string;
  readonly VITE_REQUEST_URL: string;
  readonly VITE_SOCKET_URL: string;
  readonly VITE_G_ZIP: boolean;
  readonly VITE_DIST_PATH: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_BUILD_SIZE_WARNING: number;
  readonly VITE_SERVER_HOST: number;
  readonly VITE_SERVER_PORT: number;
  readonly VITE_SERVER_HTTPS: boolean;
  readonly VITE_SERVER_OPEN: boolean;
  readonly APP_NAME: string;
  readonly APP_REQUEST_URL: string;
  readonly APP_SOCKET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
