import type { IObject } from '#/interface.d';
import type { AppState } from '#/store/app.d';
import { defineStore } from 'pinia';
import { getStorage, setStorage } from '@/utils/wings-storage';
import { StorageAppEnum, StorageLayoutEnum } from '@/enums/storage';

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

    /**
     * 是否只保持一个子菜单的展开
     */
    uniqueOpened: getStorage(StorageLayoutEnum.UNIQUE_OPENED) || true,

    /**
     * 是否水平折叠收起菜单
     */
    collapse: getStorage(StorageLayoutEnum.COLLAPSE) || false,

    /**
     * 管理系统头部高度
     */
    adminHeaderHeight: getStorage(StorageLayoutEnum.HEADER_HEIGHT) || '4rem',

    /**
     * 管理系统底部高度
     */
    adminFooterHeight: getStorage(StorageLayoutEnum.FOOTER_HEIGHT) || '2rem',

    /**
     * 管理系统菜单宽度
     */
    adminMenuWidth: getStorage(StorageLayoutEnum.MENU_WIDTH) || '14rem',

    /**
     * 管理系统是否显示底部栏
     */
    adminShowFooter: getStorage(StorageLayoutEnum.SHOW_FOOTER) || false,
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

    /**
     * 切换管理系统菜单折叠状态
     */
    changeCollapse() {
      this.collapse = !this.collapse;
      this.adminMenuWidth = this.collapse ? '4rem' : '14rem';
    },
  },
});
