<script lang="ts" setup name="layout-action-avatar">
import { DefaultSettings } from '@/settings';
import { RouteEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const route = useRoute();

const router = useRouter();

const { userStore } = useStore();

const actionChange = (command: string): void => {
  if (command.indexOf('/') !== -1) {
    router.push({ path: command });
  } else if (command === 'switchRoles') {
    userStore.switchRoles();
  } else if (command === 'logout') {
    userStore.logout();
  }
};

const goLoginPage = (): void => {
  if (userStore.isLogin) return;
  router.push({ path: RouteEnum.ROUTE_SIGNIN });
};
</script>
<template>
  <el-avatar
    cursor-pointer
    :size="38"
    :src="userStore.userProfile.avatar"
    @click="goLoginPage"
    v-if="!userStore.isLogin"
  >
    <span text-1>{{ t('base.form.login') }}</span>
  </el-avatar>
  <el-dropdown @command="actionChange" v-else>
    <el-avatar cursor-pointer :size="38" :src="userStore.userProfile.avatar">
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :command="DefaultSettings.AdminFirstRoute"
          v-if="route.path.indexOf('website') !== -1"
        >
          <el-icon><Monitor /></el-icon>
          <span>{{ t('base.admin') }}</span>
        </el-dropdown-item>
        <el-dropdown-item command="swtichRoles">
          <el-icon><CollectionTag /></el-icon>
          <span>{{ t('base.switchRoles') }}</span>
        </el-dropdown-item>
        <el-dropdown-item :command="RouteEnum.ROUTE_PERSONAL_PROFILE">
          <el-icon><User /></el-icon>
          <span>{{ t('admin.personalCenter.personalProfile.menuName') }}</span>
        </el-dropdown-item>
        <el-dropdown-item :command="RouteEnum.ROUTE_PERSONAL_SETTINGS">
          <el-icon><Setting /></el-icon>
          <span>{{ t('admin.personalCenter.personalSettings.menuName') }}</span>
        </el-dropdown-item>
        <el-dropdown-item command="logout">
          <el-icon><SwitchButton /></el-icon>
          <span>{{ t('base.form.logout') }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
