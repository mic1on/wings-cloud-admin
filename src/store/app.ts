import type { IObject } from '#/interface.d';
import type { AppState } from '#/store/app.d';
import { defineStore } from 'pinia';
import { getStorage, setStorage } from '@/utils/app-storage';
import { StorageAppEnum } from '@/enums/storage';

/**
 * 导出应用级状态钩子
 */
export default defineStore('app', {
  state: (): AppState => ({
    /**
     * 当前语言环境
     */
    language:
      getStorage(StorageAppEnum.LANGUAGE) ||
      (process.env.APP_DEFAULT_LANGUAGE as string),

    /**
     * 全局 Loading
     */
    globalLoading: true,
  }),
  actions: {
    /**
     * 切换语言环境
     */
    changeLanguage(data: IObject): void {
      this.language = data.alias;
      setStorage(StorageAppEnum.LANGUAGE, data.alias);
    },

    /**
     * 切换全局 Loading 状态
     */
    changeGlobalLoading(status: boolean): void {
      this.globalLoading = status;
    },
  },
});
