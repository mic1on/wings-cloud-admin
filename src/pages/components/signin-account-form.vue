<script lang="ts" setup name="signin-account-form">
import type { FormRules, FormInstance } from 'element-plus';
import type { InternalRuleItem, SyncValidateResult } from 'async-validator';
import type { LoginAccountForm } from '..';
import type { ResponseData } from '@/utils/request/index.d';
import { useStore } from '@/hooks/use-store';
import { USERNAME, PASSWORD_NORMAL } from '@/utils/reg-exp';
import { RouteEnum } from '@/enums';
import { validateUsername as _validateUsername } from '@/apis/admin/auth';

const { userStore } = useStore();

const { t } = useI18n();

const router = useRouter();

const formRef = ref<FormInstance>();

const form = ref<LoginAccountForm>({
  username: '',
  password: '',
  remember: false,
  type: 0,
});

const validateUsername = (
  rule: InternalRuleItem,
  value: string,
  callback: (error?: string | Error | undefined) => void
): void | SyncValidateResult => {
  if (value && !USERNAME.test(value)) {
    callback(
      new Error(
        t('crud.formatIncorrect', { label: t('common.account.usernameText') })
      )
    );
  } else if (value && USERNAME.test(value)) {
    _validateUsername({ username: value }).then(({ data }: ResponseData) => {
      if (data.validateResult) {
        callback();
      } else {
        callback(new Error(t('common.authentication.signup')));
      }
    });
  }
};

const formRules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: t('crud.enter', { label: t('common.account.usernameText') }),
      trigger: 'change',
    },
    { validator: validateUsername, trigger: 'blur' },
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
});

const goPasswordPageByForget = (): void => {
  router.push({ path: RouteEnum.ROUTE_PASSWORD_FORGET });
};

const loginLoading = ref<boolean>(false);

const login = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) return;
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      loginLoading.value = true;
      await userStore.loginByAccount(form.value);
      loginLoading.value = false;
    }
  });
};
</script>
<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <el-form-item prop="username">
      <el-input
        v-model="form.username"
        autocomplete="off"
        :placeholder="t('common.account.username')"
      >
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
        <template #suffix>
          <el-checkbox
            inline-block
            text-4
            style="color: var(--el-color-info-light-3)"
            v-model="form.remember"
            :label="t('pages.signin.keep')"
          ></el-checkbox>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        type="password"
        autocomplete="off"
        show-password
        :placeholder="t('common.account.password')"
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div w-full flex items-center justify-between>
        <el-button
          inline-block
          p-0
          link
          type="info"
          @click="goPasswordPageByForget"
        >
          <span text-4 font-600 style="color: var(--el-text-color-regular)">
            {{ t('pages.password.forget') }}
          </span>
        </el-button>
        <el-button
          type="primary"
          w="46%"
          :loading="loginLoading"
          @click="login(formRef)"
        >
          {{ t('pages.signin.btn') }}
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
