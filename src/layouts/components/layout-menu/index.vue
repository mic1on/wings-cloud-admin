<script lang="ts" setup>
import useBase from '@/hooks/base';
import MenuItem from './menu-item.vue';

const route = useRoute();

const { appStore, appRouteStore } = useBase();
</script>

<template>
  <el-menu
    router
    mode="vertical"
    collapse-transition
    :collapse="appStore.collapse"
    :unique-opened="appStore.uniqueOpened"
    :default-active="route.path"
    important="border-r-none"
    :style="`height: calc(100vh - ${appStore.adminHeaderHeight}); width:100%;`"
  >
    <menu-item :routes="appRouteStore.adminRoutes"></menu-item>
  </el-menu>
</template>
