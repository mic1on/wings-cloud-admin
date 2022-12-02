<script lang="ts" setup>
import { RouteEnum } from '@/constants/enums';
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import SignTemplate from './components/sign-template.vue';
import SigninAccountForm from './components/signin-account-form.vue';
import SigninMobileForm from './components/signin-mobile-form.vue';
import TermsConditions from './components/terms-conditions.vue';

defineOptions({
  name: 'Signin',
});

const systemStore = useSystemStore();

const { t } = useI18n();

const route = useRoute();
const router = useRouter();

const loginType = ref<string>(
  route.params.type ? (route.params.type as string) : 'account'
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
        <el-button
          important="text-4 p-0 font-600"
          link
          type="primary"
          @click="goSignup()"
        >
          {{ t('signin.createUser') }}
        </el-button>
      </div>
    </template>
    <template #title>
      <div mb-4 text-6 font-600 style="color: var(--el-color-info-light)">
        {{ t('signin.title', { text: t('app.name') }) }}
      </div>
      <div
        font-500
        style="color: var(--el-text-color-secondary); font-size: 14px"
      >
        {{ t('signin.administrator') }}
      </div>
    </template>
    <template #form>
      <signin-account-form
        v-if="loginType === 'account' || !loginType"
      ></signin-account-form>
      <signin-mobile-form v-if="loginType === 'mobile'"></signin-mobile-form>
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
          v-if="loginType !== 'mobile'"
          @click="changeLoginType('mobile')"
        >
          <span font-600> {{ t('signin.mobile') }}</span>
        </el-button>
        <el-button
          w="46%"
          size="large"
          v-if="loginType === 'account' || loginType === 'mobile'"
        >
          <svg-icon show-el-width name="social-wechat" size="1rem"></svg-icon>
          <span font-600> {{ t('signin.wechat') }}</span>
        </el-button>
      </div>
    </template>
    <template
      #bottom-center
      v-if="loginType === 'account' || loginType === 'mobile'"
    >
      <div w-full>
        <terms-conditions :label="t('signin.btn')"></terms-conditions>
        <div
          v-if="systemStore.isMobile"
          text-center
          text-2
          style="color: var(--el-color-info-light-3)"
        >
          {{ t('app.copyright') }}
        </div>
      </div>
    </template>
  </sign-template>
</template>
