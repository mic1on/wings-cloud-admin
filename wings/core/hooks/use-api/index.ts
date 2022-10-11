/**
 * @name useWingsApis
 * @description 获取挂载的 api 实例钩子函数
 * @return apis
 */
export const useWingsApis = () => {
  const appInstance = getCurrentInstance();
  const apis = appInstance?.appContext.config.globalProperties.$apis;

  return { apis };
};
