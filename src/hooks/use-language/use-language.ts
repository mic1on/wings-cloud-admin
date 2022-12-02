import { useSystemStore } from '@/hooks/use-store/use-system-store';

/**
 * @name useLanguage
 * @description 基于 vue-i18n 的国际化多语言钩子函数
 * @return currentLanguage 当前语言环境
 * @return changeLanguage 切换语言环境
 * @return languages 语言翻译文本
 */
export const useLanguage = () => {
  const systemStore = useSystemStore();

  const { messages, locale } = useI18n();

  const currentLanguage = computed(() => {
    return locale.value;
  });

  const changeLanguage = (
    value: string | number | Record<string, any> | undefined
  ) => {
    locale.value = value as string;
    systemStore.changeLanguage({
      alias: value,
      name: messages.value[value as string].name,
    });
    location.reload();
  };

  return {
    currentLanguage,
    changeLanguage,
    languages: messages.value,
  };
};
