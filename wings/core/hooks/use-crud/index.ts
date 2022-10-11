import type { Callback } from '#/interface.d';
import type { Form } from '#/app/app-code-count-down.d';
import { ElMessage } from 'element-plus';

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
export const useWingsCountDown = () => {
  const { t } = useI18n();

  const form = reactive<Form>({
    time: 60,
    getting: false,
    send: false,
    timer: undefined,
  });

  const getCode = (
    data: string | number | null | undefined,
    callBack: Callback
  ): void => {
    if (!data) {
      ElMessage.error(
        t('base.form.enter', { label: t('base.form.mobilePhone') })
      );
      return;
    }
    callBack();
  };

  const getCoding = (): void => {
    form.getting = true;
    form.send = true;
    form.timer = setInterval(() => {
      console.log(form.time);
      if (form.time > 0 && form.time <= 60) {
        form.time--;
      } else {
        resetCountDown(false);
      }
    }, 1000);
  };

  const resetCountDown = (isInit: boolean): void => {
    clearInterval(form.timer);
    form.time = 60;
    form.getting = false;
    form.send = isInit ? false : true;
    form.timer = undefined;
  };

  return {
    form,
    getCode,
    getCoding,
    resetCountDown,
  };
};

/**
 * Generic business processing hook functions.
 */
export const useWingsCrud = () => {
  return {};
};
