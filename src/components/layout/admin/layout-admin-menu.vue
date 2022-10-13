<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const route = useRoute();

const { baseStore, routeStore } = useStore();
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
    <layout-admin-menu-item
      :routes="routeStore.adminRoutes"
    ></layout-admin-menu-item>
  </el-menu>
</template>
