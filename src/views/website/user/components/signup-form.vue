<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';
import type { SignupAccountForm } from '#/views/website/user.d';
import { ElMessage } from 'element-plus';
import { InternalRuleItem, SyncValidateResult } from 'async-validator';
import { USERNAME, PASSWORD_NORMAL, MOBILE_PHONE } from '@/utils/reg-exp';
import { getStorage } from '@/utils';
import { StorageAppEnum, RouteUserEnum, GetPhoneCodeType } from '@/enums';
import { useWingsCountDown, useWingsCrud, useWingsStore } from '@/hooks';

const { t } = useI18n();

const router = useRouter();

const { apis } = useWingsCrud();

const { appUserStore } = useWingsStore();

const countDown = useWingsCountDown();

const formRef = ref<FormInstance>();

const form = ref<SignupAccountForm>({
  username: '',
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
  username: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.usernameText') }),
      trigger: 'change',
    },
    {
      pattern: USERNAME,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.usernameText'),
      }),
      trigger: 'blur',
    },
  ],
  phone: [
    {
      required: false,
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
      required: form.value.phone ? true : false,
      message: t('base.form.enter', { label: t('base.form.securityCode') }),
      trigger: 'change',
    },
    {
      len: 6,
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
  router.push({ path: RouteUserEnum.ROUTE_LOGIN });
};

const mobileAreaCodeList = getStorage(StorageAppEnum.MOBILE_PHONE_AREA_CODE);

const getPhoneCode = (): void => {
  countDown.getCode(form.value.phone, async () => {
    const res = await apis.base.getPhoneCode({
      phone: form.value.phone,
      type: GetPhoneCodeType.SIGNUP,
    });
    if (res.code === 0) {
      ElMessage.success(t('base.form.sendSuccess'));
      countDown.getCoding();
    }
  });
};

const signupLoading = ref<boolean>(false);

const signup = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) return;
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      signupLoading.value = true;
      await appUserStore.signup(form.value);
      signupLoading.value = false;
    }
  });
};
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <div mb-8>
      <div mb-4 text-8 font-600 style="color: var(--ep-color-info-light)">
        {{ t('website.user.signupTitle') }}
      </div>
      <div flex items-center>
        <span text-3 pr-2 style="color: var(--ep-color-info-light-3)">{{
          t('website.user.haveAccount')
        }}</span>
        <el-button important="p-0" link type="primary" @click="goLogin()">
          <span text-3>{{ t('website.user.backLogin') }}</span>
        </el-button>
      </div>
    </div>
    <el-form-item prop="username">
      <el-input
        v-model="form.username"
        autocomplete="off"
        :placeholder="
          t('base.form.enter', { label: t('base.form.usernameText') })
        "
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
    <el-form-item mb-2>
      <el-button type="primary" w="100%" @click="signup(formRef)">{{
        t('base.form.signup')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
