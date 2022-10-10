/**
 * @name useWingsCrud
 */

export default () => {
  // api 实例化
  const appInstance = getCurrentInstance();
  const apis = appInstance?.appContext.config.globalProperties.$apis;

  return { apis };
};
