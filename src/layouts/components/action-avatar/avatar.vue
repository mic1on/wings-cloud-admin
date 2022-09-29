<script lang="ts" setup>
import useAppStore from '@/hooks/app-store';
import { RouteUserEnum } from '@/enums/route';

const { t } = useI18n();
const router = useRouter();

const appStore = useAppStore();

const goLoginPage = (): void => {
  if (appStore.user.isLogin) return;
  router.push({ path: RouteUserEnum.ROUTE_LOGIN });
};
</script>

<template>
  <el-avatar
    cursor-pointer
    :size="34"
    :src="appStore.user.userInfo.avatar"
    @click="goLoginPage()"
  >
    <span text-1>{{ appStore.user.isLogin ? '' : t('base.form.login') }}</span>
  </el-avatar>
</template>
