/**
 * 导出 app-api 钩子函数
 */
export default () => {
  /**
   * Api 实例
   */
  const appInstance = getCurrentInstance();
  const apis = appInstance?.appContext.config.globalProperties.$apis;

  return {
    apis,
  };
};
