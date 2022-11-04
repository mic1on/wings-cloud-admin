import type { Callback } from '@/global.d';
import type { Form } from './index.d';
import { ElMessage } from 'element-plus';
import { getPhoneCode as _getPhoneCode } from '@/apis/website/user';

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

  // 倒计时表单
  const countDownForm = reactive<Form>({
    time: 60,
    getting: false,
    send: false,
    timer: undefined,
  });

  // 获取验证码主函数
  const getCode = (
    data: string | number | null | undefined,
    callBack: Callback
  ): void => {
    if (!data) {
      ElMessage.error(t('crud.enter', { label: t('common.phone.phone') }));
      return;
    }
    callBack();
  };

  // 触发计时器
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

  // 获取验证码二次封装
  const getPhoneCode = (phone: number | string, type): void => {
    getCode(phone, async () => {
      const res = await _getPhoneCode({
        phone,
        type,
      });
      if (res.code === 0) {
        ElMessage.success(t('common.phone.success'));
        getCoding();
      }
    });
  };

  // 重置倒计时
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
