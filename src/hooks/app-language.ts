import { stores } from '@/plugins/pinia';

/**
 * 导出多语言环境切换钩子函数
 */
export default () => {
  const { messages, locale } = useI18n();

  const appStore = stores.app.default();

  const currentLanguage = computed(() => {
    return locale.value;
  });

  const changeLanguage = (
    value: string | number | Record<string, any> | undefined
  ) => {
    locale.value = value as string;
    appStore.changeLanguage({
      alias: value,
      name: messages.value[value as string].name,
    });
    location.reload();
  };

  return {
    languages: messages.value,
    currentLanguage,
    changeLanguage,
  };
};
