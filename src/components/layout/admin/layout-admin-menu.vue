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
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-sub-bg-color);
  border-radius: var(--wings-menu-radius);
  transition: all var(--ep-transition-duration)
    var(--ep-transition-function-ease-in-out-bezier);
}

.ep-menu.ep-menu--collapse {
  width: 100%;
}

.ep-menu.ep-menu--vertical {
  height: calc(100vh - var(--wings-header-height));
  padding: 10px;
  background-color: var(--wings-menu-bg-color);
}

.ep-menu.ep-menu-inline {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-bg-color);
  border-radius: var(--wings-menu-radius);
}
</style>
