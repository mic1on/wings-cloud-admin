<script lang="ts" setup>
import { RouteEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';
import SignTemplate from './components/sign-template.vue';
import SigninAccountForm from './components/signin-account-form.vue';
import SigninPhoneForm from './components/signin-phone-form.vue';
import TermsConditions from './components/terms-conditions.vue';

const { baseStore } = useStore();

const { t } = useI18n();

const route = useRoute();
const router = useRouter();

const loginType = ref<string>(
  route.params.type
    ? (route.params.type as string)
    : (baseStore.settings.LoginType as string)
);

const changeLoginType = (type: string): void => {
  loginType.value = type;
};

const goSignup = (): void => {
  router.push({ path: RouteEnum.ROUTE_SIGNUP });
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
          {{ t('signin.newUser') }}
        </span>
        <el-button text-4 p-0 link font-600 type="primary" @click="goSignup()">
          {{ t('signin.createUser') }}
        </el-button>
      </div>
    </template>
    <template #title>
      <div mb-10 text-6 font-600 style="color: var(--el-color-info-light)">
        {{ t('signin.title', { text: t('app.name') }) }}
      </div>
      <div
        font-500
        style="color: var(--el-text-color-secondary); font-size: 14px"
      >
        {{ t('signin.sysadmin') }}
      </div>
    </template>
    <template #form>
      <signin-account-form
        v-if="loginType === 'account' || !loginType"
      ></signin-account-form>
      <signin-phone-form v-if="loginType === 'phone'"></signin-phone-form>
      <el-divider mt-10>
        <span text-2 style="color: var(--el-text-color-primary)">
          {{ t('signin.or') }}
        </span>
      </el-divider>
      <div mt-10 w="100%" flex justify-between items-center>
        <el-button
          w="45%"
          size="large"
          v-if="loginType !== 'account'"
          @click="changeLoginType('account')"
        >
          <span font-600>{{ t('signin.account') }}</span>
        </el-button>
        <el-button
          w="46%"
          size="large"
          v-if="loginType !== 'phone'"
          @click="changeLoginType('phone')"
        >
          <span font-600> {{ t('signin.phone') }}</span>
        </el-button>
        <el-button
          w="46%"
          size="large"
          v-if="loginType === 'account' || loginType === 'phone'"
        >
          <svg-icon show-el-width name="social-wechat" size="1rem"></svg-icon>
          <span font-600> {{ t('signin.wechat') }}</span>
        </el-button>
      </div>
    </template>
    <template
      #bottom-center
      v-if="loginType === 'account' || loginType === 'phone'"
    >
      <terms-conditions :label="t('signin.btn')"></terms-conditions>
    </template>
  </sign-template>
</template>
