<script lang="ts" setup>
import UserTemplate from './components/user-template.vue';
import LoginAccountForm from './components/login-account-form.vue';
import LoginPhoneForm from './components/login-phone-form.vue';
import LoginWechatForm from './components/login-wechat-form.vue';
import LoginAlipayForm from './components/login-alipay-form.vue';
import LoginEmailForm from './components/login-email-form.vue';
import TermsConditions from './components/terms-conditions.vue';

const { t } = useI18n();

const route = useRoute();

const loginType = ref<string | null | undefined>(
  route.params.type ? route.params.type : import.meta.env.APP_LOGIN_TYPE
);

const changeLoginType = (type: string, isOpen: boolean): void => {
  loginType.value = type;
};
</script>
<template>
  <user-template>
    <template #form>
      <login-account-form
        v-if="loginType === 'account' || !loginType"
      ></login-account-form>
      <login-phone-form v-if="loginType === 'phone'"></login-phone-form>
      <login-wechat-form v-if="loginType === 'wechat'"></login-wechat-form>
      <login-alipay-form v-if="loginType === 'alipay'"></login-alipay-form>
      <login-email-form v-if="loginType === 'email'"></login-email-form>
    </template>
    <template
      #terms-conditions
      v-if="loginType === 'account' || loginType === 'phone'"
    >
      <terms-conditions :label="t('base.form.signup')"></terms-conditions>
    </template>
    <template #login-type>
      <el-divider>
        <span text-2 style="color: var(--ep-color-info-light-3)">
          {{ t('website.user.other') }}
        </span>
      </el-divider>
      <div w="100%" flex justify-around items-center>
        <el-button
          round
          v-if="loginType !== 'account'"
          @click="changeLoginType('account', false)"
        >
          <el-icon><Key /></el-icon>
          <span>{{ t('website.user.accountLogin') }}</span>
        </el-button>
        <el-button
          important="p-x-4"
          round
          v-if="loginType !== 'phone'"
          @click="changeLoginType('phone', false)"
        >
          <el-icon><Iphone /></el-icon>
          <span>{{ t('website.user.phoneLogin') }}</span>
        </el-button>
        <wings-svg-icon
          v-if="loginType === 'account' || loginType === 'phone'"
          cursor-pointer
          name="wechat"
          w-8
          h-8
          @click="changeLoginType('wechat', true)"
        ></wings-svg-icon>
        <wings-svg-icon
          v-if="loginType === 'account' || loginType === 'phone'"
          cursor-pointer
          name="alipay"
          w-8
          h-8
          @click="changeLoginType('alipay', true)"
        ></wings-svg-icon>
        <wings-svg-icon
          v-if="loginType === 'account' || loginType === 'phone'"
          cursor-pointer
          name="email"
          w-8
          h-8
          @click="changeLoginType('email', true)"
        ></wings-svg-icon>
      </div>
    </template>
  </user-template>
</template>
<style lang="scss" scoped>
:deep(.#{$namespace}-button.is-round) {
  width: 8.4rem;
  margin: 0 !important;
  padding: 10px 12px;
}
:deep(.#{$namespace}-divider__text) {
  background-color: var(--ep-card-bg-color);
}
</style>
