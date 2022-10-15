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
  >
    <layout-admin-menu-item
      :routes="routeStore.adminRoutes"
    ></layout-admin-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
:deep(.ep-menu) {
  color: var(--wings-menu-text);
  background-color: var(--wings-menu-sub-bg);
  border-radius: var(--wings-menu-radius);
}

.ep-menu.ep-menu--vertical {
  height: calc(100vh - var(--wings-header-height));
  padding: 0 10px !important ;
  background-color: var(--wings-menu-bg);
}

.ep-menu.ep-menu-inline {
  color: var(--wings-menu-text);
  background-color: var(--wings-menu-bg);
  border-radius: var(--wings-menu-radius);
}
</style>
