<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';
import type { PasswordRetrieveForm } from '../index.d';
import { ElMessage } from 'element-plus';
import { InternalRuleItem, SyncValidateResult } from 'async-validator';
import { useCountDown } from '@/hooks/use-count-down';
import { PhoneCodeTypeEnum } from '@/enums';
import { getStorage } from '@/utils/storage';
import { RouteEnum, StorageEnum } from '@/enums';
import { PASSWORD_NORMAL, MOBILE_PHONE } from '@/utils/reg-exp';
import { getPhoneCode as _getPhoneCode } from '@/apis/base';

const { t } = useI18n();

const countDown = useCountDown();

const router = useRouter();

const formRef = ref<FormInstance>();

const form = ref<PasswordRetrieveForm>({
  areaCode: import.meta.env.APP_MOBILE_AREA_CODE,
  phone: '',
  code: '',
  password: '',
  passwordAgain: '',
});

const validatePassword = (
  rule: InternalRuleItem,
  value: string,
  callback: (error?: string | Error | undefined) => void
): void | SyncValidateResult => {
  if (value && !PASSWORD_NORMAL.test(value)) {
    callback(
      new Error(
        t('base.form.formatIncorrect', { label: t('base.form.passwordText') })
      )
    );
  } else if (value && PASSWORD_NORMAL.test(value)) {
    if (value !== form.value.password) {
      callback(
        new Error(
          t('base.form.inconsistent', { label: t('base.form.passwordText') })
        )
      );
    } else {
      callback();
    }
  }
};

const formRules = reactive<FormRules>({
  phone: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.mobilePhoneText') }),
      trigger: 'change',
    },
    {
      pattern: MOBILE_PHONE,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.mobilePhoneText'),
      }),
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.securityCode') }),
      trigger: 'change',
    },
    {
      type: 'number',
      min: 6,
      max: 6,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.securityCode'),
      }),
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.passwordText') }),
      trigger: 'change',
    },
    {
      pattern: PASSWORD_NORMAL,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.passwordText'),
      }),
      trigger: 'blur',
    },
  ],
  passwordAgain: [
    {
      required: true,
      message: t('base.form.enterAgain', {
        label: t('base.form.passwordText'),
      }),
      trigger: 'change',
    },
    {
      validator: validatePassword,
      trigger: 'blur',
    },
  ],
});

const goLogin = (): void => {
  router.push({ path: RouteEnum.ROUTE_LOGIN });
};

const mobileAreaCodeList = getStorage(StorageEnum.MOBILE_PHONE_AREA_CODE);

const getPhoneCode = (): void => {
  countDown.getCode(form.value.phone, async () => {
    const res = await _getPhoneCode({
      phone: form.value.phone,
      type: PhoneCodeTypeEnum.FORGET_PASSWORDS,
    });
    if (res.code === 0) {
      ElMessage.success(t('base.form.sendSuccess'));
      countDown.getCoding();
    }
  });
};
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <div mb-8>
      <div mb-4 text-8 font-600 style="color: var(--ep-color-info-light)">
        {{ t('website.user.passwordForgetTitle') }}
      </div>
      <div flex items-center>
        <span text-3 pr-2 style="color: var(--ep-color-info-light-3)">{{
          t('website.user.passwordForgetDescription')
        }}</span>
        <el-button important="p-0" link type="primary" @click="goLogin()">
          <span text-3>{{ t('base.form.login') }}</span>
        </el-button>
      </div>
    </div>
    <el-form-item prop="phone">
      <el-input
        v-model.number="form.phone"
        autocomplete="off"
        :placeholder="
          t('base.form.enter', { label: t('base.form.mobilePhoneText') })
        "
      >
        <template #prepend>
          <el-select v-model="form.areaCode" important="w-24">
            <el-option
              v-for="(item, index) in mobileAreaCodeList"
              :key="index"
              :label="item.code"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </template>
        <template #prefix>
          <el-icon><Iphone /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code" v-show="form.phone">
      <el-input
        v-model.number="form.code"
        autocomplete="off"
        :placeholder="
          t('base.form.enter', { label: t('base.form.securityCodeText') })
        "
      >
        <template #prefix>
          <el-icon><ChatDotSquare /></el-icon>
        </template>
        <template #suffix>
          <el-button
            inline-block
            p-0
            link
            type="primary"
            :disabled="countDown.form.getting"
            @click="getPhoneCode()"
          >
            <span text-3 v-if="countDown.form.getting">
              {{
                t('base.form.countDownTimeLabel', {
                  time: countDown.form.time,
                })
              }}
            </span>
            <span text-3 v-else>
              {{
                countDown.form.send
                  ? t('base.form.resend')
                  : t('base.form.getSecurityCode')
              }}
            </span>
          </el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        type="password"
        autocomplete="off"
        show-password
        :placeholder="
          t('base.form.enter', { label: t('base.form.passwordText') })
        "
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="passwordAgain">
      <el-input
        v-model="form.passwordAgain"
        type="password"
        autocomplete="off"
        show-password
        :placeholder="
          t('base.form.enterAgain', { label: t('base.form.passwordText') })
        "
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" w="100%">{{ t('base.crud.update') }}</el-button>
    </el-form-item>
    <div text-3 style="color: var(--ep-color-info-light-3)">
      {{ t('base.form.tip', { label: t('website.user.forgetPhone') }) }}
    </div>
  </el-form>
</template>
