import useAppStore from '@/hooks/app-store';

/**
 * 导出多语言环境钩子函数
 */
export default () => {
  const { messages, locale } = useI18n();

  const appStore = useAppStore();

  const currentLanguage = computed(() => {
    return locale.value;
  });

  const changeLanguage = (
    value: string | number | Record<string, any> | undefined
  ) => {
    locale.value = value as string;
    appStore.app.changeLanguage({
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
