<script lang="ts" setup name="signup-form">
import type { FormRules, FormInstance } from 'element-plus';
import type { SignupAccountForm } from '../index.d';
import { InternalRuleItem, SyncValidateResult } from 'async-validator';
import { RouteEnum, StorageEnum, PhoneCodeTypeEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';
import { useCountDown } from '@/hooks/use-count-down';
import { USERNAME, PASSWORD_NORMAL, MOBILE_PHONE } from '@/utils/reg-exp';
import { getStorage } from '@/utils/storage';
import { getPhoneCode as _getPhoneCode } from '@/apis/website/user';

const { t } = useI18n();

const router = useRouter();

const { userStore } = useStore();

const countDown = useCountDown();

const formRef = ref<FormInstance>();

const form = ref<SignupAccountForm>({
  nickname: '',
  username: '',
  areaCode: '+86',
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
        t('crud.formatIncorrect', { label: t('common.account.passwordText') })
      )
    );
  } else if (value && PASSWORD_NORMAL.test(value)) {
    if (value !== form.value.password) {
      callback(
        new Error(
          t('crud.inconsistent', { label: t('common.account.passwordText') })
        )
      );
    } else {
      callback();
    }
  }
};

const formRules = reactive<FormRules>({
  nickname: [
    {
      required: true,
      message: t('crud.enter', { label: t('common.account.nicknameText') }),
      trigger: 'change',
    },
    {
      pattern: USERNAME,
      message: t('crud.formatIncorrect', {
        label: t('crud.nicknameText'),
      }),
      trigger: 'blur',
    },
  ],
  username: [
    {
      required: true,
      message: t('crud.enter', { label: t('common.account.usernameText') }),
      trigger: 'change',
    },
    {
      pattern: USERNAME,
      message: t('crud.formatIncorrect', {
        label: t('crud.usernameText'),
      }),
      trigger: 'blur',
    },
  ],
  phone: [
    {
      required: false,
      message: t('crud.enter', { label: t('common.phone.phoneText') }),
      trigger: 'change',
    },
    {
      pattern: MOBILE_PHONE,
      message: t('crud.formatIncorrect', {
        label: t('common.phone.phoneText'),
      }),
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: form.value.phone ? true : false,
      message: t('crud.enter', { label: t('common.phone.code') }),
      trigger: 'change',
    },
    {
      len: 6,
      message: t('crud.formatIncorrect', {
        label: t('common.phone.code'),
      }),
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: t('crud.enter', { label: t('common.account.passwordText') }),
      trigger: 'change',
    },
    {
      pattern: PASSWORD_NORMAL,
      message: t('crud.formatIncorrect', {
        label: t('common.account.passwordText'),
      }),
      trigger: 'blur',
    },
  ],
  passwordAgain: [
    {
      required: true,
      message: t('crud.enterAgain', {
        label: t('common.account.passwordText'),
      }),
      trigger: 'change',
    },
    {
      validator: validatePassword,
      trigger: 'blur',
    },
  ],
});

const mobileAreaCodeList = getStorage(StorageEnum.MOBILE_PHONE_AREA_CODE);

const signupLoading = ref<boolean>(false);

const signup = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) return;
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      signupLoading.value = true;
      await userStore.signup(form.value);
      signupLoading.value = false;
    }
  });
};
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <el-form-item prop="nickname">
      <el-input
        v-model="form.nickname"
        autocomplete="off"
        :placeholder="t('common.account.nickname')"
      >
        <template #prefix>
          <el-icon><Postcard /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="username">
      <el-input
        v-model="form.username"
        autocomplete="off"
        :placeholder="t('common.account.username')"
      >
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input
        v-model.number="form.phone"
        autocomplete="off"
        :placeholder="t('common.phone.phone')"
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
        :placeholder="t('common.phone.code')"
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
            :disabled="countDown.countDownForm.getting"
            @click="
              countDown.getPhoneCode(
                form.phone,
                PhoneCodeTypeEnum.FORGET_PASSWORDS
              )
            "
          >
            <span text-3 v-if="countDown.countDownForm.getting">
              {{
                t('common.phone.retrieve', {
                  time: countDown.countDownForm.time,
                })
              }}
            </span>
            <span text-3 v-else>
              {{
                countDown.countDownForm.send
                  ? t('common.phone.resend')
                  : t('common.phone.send')
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
        :placeholder="t('crud.password')"
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
        :placeholder="t('common.account.passwordAgain')"
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item mb-2>
      <el-button type="primary" w="100%" @click="signup(formRef)">{{
        t('pages.signup.btn')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
