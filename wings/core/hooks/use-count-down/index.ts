import type { Callback } from '#/interface.d';
import type { Form } from '#/app/app-code-count-down.d';
import { ElMessage } from 'element-plus';

/**
 * @name useWingsCountDown
 * @description 获取验证码倒计时钩子函数
 * @return countDownForm
 * @return getCode
 * @return getCoding
 * @return resetCountDown
 */
export const useWingsCountDown = () => {
  const { t } = useI18n();

  const countDownForm = reactive<Form>({
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
    countDownForm.getting = true;
    countDownForm.send = true;
    countDownForm.timer = setInterval(() => {
      if (countDownForm.time > 0 && countDownForm.time <= 60) {
        countDownForm.time--;
      } else {
        resetCountDown(false);
      }
    }, 1000);
  };

  const resetCountDown = (isInit: boolean): void => {
    clearInterval(countDownForm.timer);
    countDownForm.time = 60;
    countDownForm.getting = false;
    countDownForm.send = isInit ? false : true;
    countDownForm.timer = undefined;
  };

  return {
    countDownForm,
    getCode,
    getCoding,
    resetCountDown,
  };
};
