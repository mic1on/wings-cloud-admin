<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';
import { RouteEnum } from '@/enums';

const { t } = useI18n();

const route = useRoute();

const router = useRouter();

const { userStore } = useStore();

const adminRoute = import.meta.env.APP_ADMIN_FIRST_ROUTE;

const actionChange = (command: string): void => {
  if (command.indexOf('/') !== -1) {
    router.push({ path: command });
  } else if (command === 'switchRoles') {
    userStore.switchRoles();
  } else if (command === 'logout') {
    userStore.logout('login');
  }
};
</script>
<template>
  <layout-avatar v-if="!userStore.isLogin"> </layout-avatar>
  <el-dropdown @command="actionChange" v-else>
    <layout-avatar> </layout-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :command="adminRoute"
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
          <span>{{ t('base.userInfo') }}</span>
        </el-dropdown-item>
        <el-dropdown-item :command="RouteEnum.ROUTE_PERSONAL_SETTINGS">
          <el-icon><Setting /></el-icon>
          <span>{{ t('base.userSettings') }}</span>
        </el-dropdown-item>
        <el-dropdown-item command="logout">
          <el-icon><SwitchButton /></el-icon>
          <span>{{ t('base.form.logout') }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
