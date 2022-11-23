import type { Callback } from '@/types/global.d';
import type { Form } from './use-count-down.d';
import { ElMessage } from 'element-plus';
import { getMobileSmscode } from '@/apis/base';

/**
 * @name useCountDown
 * @description 获取验证码倒计时钩子函数
 * @return countDownForm
 * @return getCode
 * @return getCoding
 * @return resetCountDown
 */
export const useCountDown = () => {
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
        t('crud.placeholder.enter', { label: t('crud.phone.phone') })
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

  const getPhoneCode = (phone: number | string, type: number): void => {
    getCode(phone, async () => {
      const res = await getMobileSmscode({
        phone,
        type,
      });
      if (res.code === 0) {
        ElMessage.success(t('crud.phone.success'));
        getCoding();
      }
    });
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
    getPhoneCode,
    resetCountDown,
  };
};
