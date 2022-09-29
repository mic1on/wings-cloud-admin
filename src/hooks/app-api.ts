/**
 * 导出 app-api 钩子函数
 */
export default () => {
  const appInstance = getCurrentInstance();

  const apis = appInstance?.appContext.config.globalProperties.$apis;

  return {
    apis,
  };
};
