<script lang="ts" setup>
import { DefaultSettings } from '@/settings';

const { t } = useI18n();

const appCopyright: string = import.meta.env.APP_COPYRIGHT;

const router = useRouter();

const backHome = (): void => {
  router.push({ path: DefaultSettings.FirstRoute });
};
</script>
<template>
  <div w-screen h-screen>
    <div
      fixed
      top="50%"
      left="50%"
      translate-x="-50%"
      translate-y="-50%"
      w-7xl
      flex
      items-center
      justify-between
    >
      <div w-2xl relative>
        <img
          cursor-pointer
          h-14
          block
          m-b-10
          src="@/assets/svgs/logo.svg"
          @click="backHome"
        />
        <div text-14 mb-6 font-600 style="color: var(--el-color-info-dark)">
          {{ t('website.user.loginTemplate') }}
        </div>
        <div text-6 mb-30 style="color: var(--el-color-info)">
          {{ t('website.user.loginTemplateDescription') }}
        </div>
        <div text-4 style="color: var(--el-color-info)">{{ appCopyright }}</div>
      </div>
      <el-card p-6 w-sm shadow="never">
        <slot name="title"></slot>
        <slot name="form"></slot>
        <slot name="terms-conditions"></slot>
        <slot name="login-type"></slot>
      </el-card>
    </div>
  </div>
</template>
