import type { IObject } from '../../../global';
import type { BaseState } from './base.d';
import { defineStore } from 'pinia';
import { getStorage, setStorage } from '@/utils/storage';
import { StorageEnum } from '../../../enums';

/**
 * @name useBaseStore
 * @description 导出通用状态钩子
 */
export const useBaseStore = defineStore('base', {
  state: (): BaseState => ({
    /**
     * @name language
     * @description 当前语言环境
     */
    language:
      getStorage(StorageEnum.LANGUAGE) ||
      (process.env.APP_DEFAULT_LANGUAGE as string),

    /**
     * @name globalLoading
     * @description 全局 Loading
     */
    globalLoading: true,

    /**
     * @name uniqueOpened
     * @description 是否只保持一个子菜单的展开
     */
    uniqueOpened: getStorage(StorageEnum.UNIQUE_OPENED) || true,

    /**
     * @name collapse
     * @description 是否水平折叠收起菜单
     */
    collapse: getStorage(StorageEnum.COLLAPSE) || false,

    /**
     * @name adminShowFooter
     * @description 管理系统是否显示底部栏
     */
    adminShowFooter: getStorage(StorageEnum.SHOW_FOOTER) || false,
  }),
  actions: {
    /**
     * @name changeLanguage
     * @description 切换语言环境
     */
    changeLanguage(data: IObject): void {
      this.language = data.alias;
      setStorage(StorageEnum.LANGUAGE, data.alias);
    },

    /**
     * @name changeGlobalLoading
     * @description 切换全局 Loading 状态
     */
    changeGlobalLoading(status: boolean): void {
      this.globalLoading = status;
    },

    /**
     * @name changeCollapse
     * @description 切换管理系统菜单折叠状态
     */
    changeCollapse() {
      this.collapse = !this.collapse;
    },
  },
});
