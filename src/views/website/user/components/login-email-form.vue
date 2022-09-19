<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';
import type { LoginEmailForm } from '#/views/website/user.d';
import { EMAIL } from '@/utils/app-reg-exp';

const { t } = useI18n();

const formRef = ref<FormInstance>();

const form = ref<LoginEmailForm>({
  email: '',
  code: '',
  remember: false,
  type: 4,
});

const formRules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.emailText') }),
      trigger: 'change',
    },
    {
      pattern: EMAIL,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.emailText'),
      }),
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.emailCode') }),
      trigger: 'change',
    },
    {
      type: 'number',
      min: 6,
      max: 6,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.emailCode'),
      }),
      trigger: 'blur',
    },
  ],
});
</script>
<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <div mb-8>
      <div mb-4 text-8 font-600 style="color: var(--ep-color-info-light)">
        {{ t('website.user.emailLoginTitle') }}
      </div>
      <div text-3 pr-2 style="color: var(--ep-color-info-light-3)">
        {{ t('website.user.emailLoginAndSignup') }}
      </div>
    </div>
    <el-form-item prop="email">
      <el-input
        v-model.number="form.email"
        autocomplete="off"
        :placeholder="t('base.form.enter', { label: t('base.form.emailText') })"
      >
        <template #prefix>
          <el-icon><Message /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code" mb-2>
      <el-input
        v-model.number="form.code"
        autocomplete="off"
        :placeholder="
          t('base.form.enter', { label: t('base.form.emailCodeText') })
        "
      >
        <template #prefix>
          <el-icon><ChatLineSquare /></el-icon>
        </template>
        <template #suffix>
          <el-button inline-block p-0 link type="primary">
            <span text-3>{{ t('base.form.getEmailCode') }}</span>
          </el-button>
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
      </div>
    </el-form-item>
    <el-form-item mb-2>
      <el-button type="primary" w="100%">{{
        t('base.form.loginOrSignup')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
