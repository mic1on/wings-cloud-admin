<script lang="ts" setup>
import { useWingsStore } from '@/hooks';
import { RouteUserEnum } from '@/enums';

const { t } = useI18n();
const router = useRouter();

const { appUserStore } = useWingsStore();

const goLoginPage = (): void => {
  if (appUserStore.isLogin) return;
  router.push({ path: RouteUserEnum.ROUTE_LOGIN });
};
</script>

<template>
  <el-avatar
    cursor-pointer
    :size="34"
    :src="appUserStore.userInfo.avatar"
    @click="goLoginPage()"
  >
    <span text-1>{{ appUserStore.isLogin ? '' : t('base.form.login') }}</span>
  </el-avatar>
</template>
