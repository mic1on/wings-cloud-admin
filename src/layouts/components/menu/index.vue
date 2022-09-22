<script lang="ts" setup>
import { stores } from '@/plugins/pinia';
import MenuItem from './menu-item.vue';

const route = useRoute();

const appStore = stores['app'].default();
const appRouteStore = stores['app-route'].default();
</script>

<template>
  <el-menu
    router
    mode="vertical"
    :collapse="appStore.collapse"
    :unique-opened="appStore.uniqueOpened"
    :default-active="route.path"
    important="border-r-none"
    :style="`height: calc(100vh - ${appStore.adminHeaderHeight}); width:100%;`"
  >
    <menu-item :routes="appRouteStore.adminRoutes"></menu-item>
  </el-menu>
</template>
