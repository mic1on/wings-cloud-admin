<script lang="ts" setup name="layout-admin-menu">
import { useStore } from '@/hooks/use-store';

const route = useRoute();

const { baseStore, routeStore } = useStore();
</script>

<template>
  <el-scrollbar
    view-style="
      height: calc(
        100vh - var(--wings-header-height) - var(--wings-collapse-height)
      );
    "
  >
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
  </el-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.el-menu) {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-sub-bg-color);
  border-radius: var(--wings-menu-radius);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.el-menu.el-menu--collapse {
  width: 100%;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.el-menu.el-menu--vertical {
  padding: 10px;
  background-color: var(--wings-menu-bg-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.el-menu.el-menu-inline {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-bg-color);
  border-radius: var(--wings-menu-radius);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}
</style>
