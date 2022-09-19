<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';
import type { InternalRuleItem, SyncValidateResult } from 'async-validator';
import type { LoginAccountForm } from '#/views/website/user.d';
import type { ResponseData } from '#/app/app-request.d';
import { USERNAME, PASSWORD_NORMAL } from '@/utils/app-reg-exp';
import { RouteUserEnum } from '@/enums/route';
import useAppApi from '@/hooks/app-api';
import { stores } from '@/plugins/pinia';

const { apis } = useAppApi();

const userStore = stores['app-user'].default();

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
        t('base.form.formatIncorrect', { label: t('base.form.usernameText') })
      )
    );
  } else if (value && USERNAME.test(value)) {
    apis.auth
      .validateUsername({ username: value })
      .then(({ data }: ResponseData) => {
        if (data.validateResult) {
          callback();
        } else {
          callback(new Error(t('base.authentication.signup')));
        }
      });
  }
};

const formRules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.usernameText') }),
      trigger: 'change',
    },
    { validator: validateUsername, trigger: 'blur' },
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
});

const goSignup = (): void => {
  router.push({ path: RouteUserEnum.ROUTE_SIGNUP });
};
const goPasswordPageByForget = (): void => {
  router.push({ path: RouteUserEnum.ROUTE_PASSWORD_FORGET });
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
    <div mb-8>
      <div mb-4 text-8 font-600 style="color: var(--ep-color-info-light)">
        {{ t('website.user.accountLoginTitle') }}
      </div>
      <div flex items-center>
        <span text-3 pr-2 style="color: var(--ep-color-info-light-3)">{{
          t('website.user.noAccount')
        }}</span>
        <el-button p-0 link type="primary" @click="goSignup()">
          <span text-3>{{ t('website.user.freeSignin') }}</span>
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
    <el-form-item prop="password" mb-2>
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
    <el-form-item mb-2>
      <div w="100%" flex justify-between items-center>
        <el-checkbox
          inline-block
          text-4
          style="color: var(--ep-color-info-light-3)"
          v-model="form.remember"
          :label="t('website.user.rememberMe')"
        ></el-checkbox>
        <el-button
          inline-block
          p-0
          link
          type="info"
          @click="goPasswordPageByForget"
        >
          <span text-3 style="color: var(--ep-color-info-light-3)">{{
            t('website.user.forgetPassword')
          }}</span>
        </el-button>
      </div>
    </el-form-item>
    <el-form-item mb-2>
      <el-button
        type="primary"
        w="100%"
        :loading="loginLoading"
        @click="login(formRef)"
        >{{ t('base.form.login') }}</el-button
      >
    </el-form-item>
  </el-form>
</template>
