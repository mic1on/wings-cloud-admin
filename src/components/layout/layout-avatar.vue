<script lang="ts" setup>
import { RouteEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();
const router = useRouter();

const { userStore } = useStore();

const goLoginPage = (): void => {
  if (userStore.isLogin) return;
  router.push({ path: RouteEnum.ROUTE_LOGIN });
};
</script>

<template>
  <el-avatar
    cursor-pointer
    :size="34"
    :src="userStore.userInfo.avatar"
    @click="goLoginPage()"
  >
    <span text-1>{{ userStore.isLogin ? '' : t('base.form.login') }}</span>
  </el-avatar>
</template>
