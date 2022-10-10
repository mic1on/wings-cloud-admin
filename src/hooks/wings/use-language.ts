import { stores } from '@/plugins';

/**
 * @name useWingsLanguage
 * @return currentLanguage
 * @return changeLanguage
 * @return languages
 */

export default () => {
  const appStore = stores['base'].default();

  const { messages, locale } = useI18n();

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
    currentLanguage,
    changeLanguage,
    languages: messages.value,
  };
};
