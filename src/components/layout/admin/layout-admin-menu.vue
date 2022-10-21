<script lang="ts" setup name="layout-admin-menu">
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
      :routes="routeStore.adminMenuRoutes"
    ></layout-admin-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
:deep(.el-menu) {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-sub-bg-color);
  border-radius: var(--wings-menu-radius);
}

.el-menu.el-menu--collapse {
  width: 100%;
}

.el-menu.el-menu--vertical {
  height: calc(100vh - var(--wings-header-height));
  padding: 10px;
  background-color: var(--wings-menu-bg-color);
}

.el-menu.el-menu-inline {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-bg-color);
  border-radius: var(--wings-menu-radius);
}
</style>
