<script lang="ts" setup name="layout-admin">
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <el-container>
    <el-header v-if="baseStore.settings.Layout !== 'aside'">
      <layout-admin-header></layout-admin-header>
    </el-header>
    <el-container>
      <el-aside
        v-if="baseStore.settings.Layout !== 'top-lean'"
        :style="
          baseStore.collapse
            ? 'width: var(--wings-aside-width-fold)'
            : 'width: var(--wings-aside-width)'
        "
      >
        <layout-admin-aside></layout-admin-aside>
      </el-aside>
      <el-main
        :style="
          baseStore.settings.Layout !== 'aside'
            ? 'height: calc(100vh - var(--wings-header-height));'
            : 'height: calc(100vh);'
        "
      >
        <layout-admin-tab v-if="baseStore.settings.Tab"></layout-admin-tab>
        <layout-admin-main>
          <template #main-router-view>
            <slot name="router-view"></slot>
          </template>
        </layout-admin-main>
        <el-footer v-if="baseStore.settings.Footer">
          <layout-admin-footer></layout-admin-footer>
        </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
:deep(.el-header) {
  box-sizing: border-box;
  height: var(--wings-header-height);
  padding: 0 1.8rem !important;
  background-color: var(--wings-header-bg-color);
  border-bottom: 1px solid var(--wings-header-border-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-container) {
  box-sizing: border-box;
  background-color: var(--wings-menu-bg-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-aside) {
  box-sizing: border-box;
  border-right: 1px solid var(--wings-aside-border-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-main) {
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  background: var(--wings-main-fill);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}
</style>
