<script lang="ts" setup>
import { RouteEnum, useWingsStore } from '@wings';
import Avatar from './avatar.vue';

const { t } = useI18n();

const route = useRoute();
const router = useRouter();

const { appUserStore } = useWingsStore();

const adminRoute = import.meta.env.APP_ADMIN_FIRST_ROUTE;

const actionChange = (command: string): void => {
  if (command.indexOf('/') !== -1) {
    router.push({ path: command });
  } else if (command === 'switchRoles') {
    appUserStore.switchRoles();
  } else if (command === 'logout') {
    appUserStore.logout(
      route.path.indexOf('/website/') !== -1 ? 'refresh' : 'login'
    );
  }
};
</script>
<template>
  <avatar v-if="!appUserStore.isLogin"> </avatar>
  <el-dropdown @command="actionChange" v-else>
    <avatar> </avatar>
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
