import useBaseStore from '../../plugins/pinia/modules/base';

/**
 * @name useLanguage
 * @description 基于 vue-i18n 的国际化多语言钩子函数
 * @return currentLanguage
 * @return changeLanguage
 * @return languages
 */
export const useLanguage = () => {
  const baseStore = useBaseStore();

  const { messages, locale } = useI18n();

  const currentLanguage = computed(() => {
    return locale.value;
  });

  const changeLanguage = (
    value: string | number | Record<string, any> | undefined
  ) => {
    locale.value = value as string;
    baseStore.changeLanguage({
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
