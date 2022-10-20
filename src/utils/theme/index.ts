/**
 * @name setThemeColor
 * @description 设置主题颜色
 */
export const setThemeColor = (color: string) => {
  const element = document.documentElement;
  if (element) {
    element.style.setProperty('--el-color-primary', color);
  }
};
