/**
 * The api instantiates the mount hook function.
 */
export const useWingsApis = () => {
  const appInstance = getCurrentInstance();
  const apis = appInstance?.appContext.config.globalProperties.$apis;

  return { apis };
};

/**
 * Generic business processing hook functions.
 */
export const useWingsCrud = () => {
  return {};
};
