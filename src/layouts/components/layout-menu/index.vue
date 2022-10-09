<script lang="ts" setup>
import useBase from '@/hooks/base';
import MenuItem from './menu-item.vue';

const route = useRoute();

const { appStore } = useBase();
</script>

<template>
  <el-menu
    router
    mode="vertical"
    collapse-transition
    :collapse="appStore.app.collapse"
    :unique-opened="appStore.app.uniqueOpened"
    :default-active="route.path"
    important="border-r-none"
    :style="`height: calc(100vh - ${appStore.app.adminHeaderHeight}); width:100%;`"
  >
    <menu-item :routes="appStore.route.adminRoutes"></menu-item>
  </el-menu>
</template>
