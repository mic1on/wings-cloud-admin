<script lang="ts" setup>
import SignTemplate from './components/sign-template.vue';
import SignupForm from './components/signup-form.vue';
import TermsConditions from './components/terms-conditions.vue';
import { RouteEnum } from '@/enums';

const { t } = useI18n();

const router = useRouter();

const goSignin = (): void => {
  router.replace({ path: RouteEnum.ROUTE_SIGNIN });
};
</script>
<template>
  <sign-template>
    <template #top-right>
      <div flex items-center>
        <span
          text-4
          lh-1
          font-600
          pr-2
          style="color: var(--el-text-color-primary)"
        >
          {{ t('pages.signup.have') }}
        </span>
        <el-button text-4 p-0 link font-600 type="primary" @click="goSignin()">
          {{ t('pages.signin.btn') }}
        </el-button>
      </div>
    </template>
    <template #title>
      <div mb-10 text-6 font-600 style="color: var(--el-text-color-primary)">
        {{ t('pages.signup.title', { text: t('app.name') }) }}
      </div>
    </template>
    <template #form>
      <signup-form></signup-form>
    </template>
    <template #terms-conditions>
      <terms-conditions :label="t('pages.signup.btn')"></terms-conditions>
    </template>
  </sign-template>
</template>
