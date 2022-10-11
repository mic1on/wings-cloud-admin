<script lang="ts" setup>
import { useWingsStore } from '@wings';
import MenuItem from './menu-item.vue';

const route = useRoute();

const { baseStore, appRouteStore } = useWingsStore();
</script>

<template>
  <el-menu
    router
    mode="vertical"
    collapse-transition
    :collapse="baseStore.collapse"
    :unique-opened="baseStore.uniqueOpened"
    :default-active="route.path"
    important="border-r-none"
    :style="`height: calc(100vh - ${baseStore.adminHeaderHeight}); width:100%;`"
  >
    <menu-item :routes="appRouteStore.adminRoutes"></menu-item>
  </el-menu>
</template>
