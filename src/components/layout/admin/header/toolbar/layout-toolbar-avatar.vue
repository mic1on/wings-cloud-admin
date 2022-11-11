<script lang="ts" setup name="layout-action-avatar">
import { RouteEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';
import { UserFilled } from '@element-plus/icons-vue';

const props = defineProps({
  avatarSize: {
    type: Number,
    default: 38,
  },
});

const { t } = useI18n();

const router = useRouter();

const { userStore } = useStore();

const actionChange = (command: string): void => {
  if (command.indexOf('/') !== -1) {
    router.push({ path: command });
  } else if (command === 'switchRoles') {
    userStore.switchRoles();
  } else if (command === 'signout') {
    userStore.logout();
  }
};

const goLoginPage = (): void => {
  if (userStore.isLogin) return;
  router.push({ path: RouteEnum.ROUTE_SIGNIN });
};
</script>
<template>
  <el-dropdown @command="actionChange">
    <el-avatar
      cursor-pointer
      :size="props.avatarSize"
      :src="userStore.userProfile.avatar"
      :icon="UserFilled"
    >
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="swtichRoles">
          <el-icon><CollectionTag /></el-icon>
          <span>{{ t('app.toolbar.avatar.switchRoles') }}</span>
        </el-dropdown-item>
        <el-dropdown-item :command="RouteEnum.ROUTE_PERSONAL_PROFILE">
          <el-icon><User /></el-icon>
          <span>{{ t('personal.profile.menuName') }}</span>
        </el-dropdown-item>
        <el-dropdown-item :command="RouteEnum.ROUTE_SYSTEM_SETTINGS">
          <el-icon><Setting /></el-icon>
          <span>{{ t('system.settings.menuName') }}</span>
        </el-dropdown-item>
        <el-dropdown-item command="signout">
          <el-icon><SwitchButton /></el-icon>
          <span>{{ t('app.toolbar.avatar.signout') }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
