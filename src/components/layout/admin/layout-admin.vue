<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <el-container>
    <el-header>
      <layout-admin-header></layout-admin-header>
    </el-header>
    <el-container>
      <el-aside
        :style="
          baseStore.collapse
            ? 'width: var(--wings-aside-width-fold)'
            : 'width: var(--wings-aside-width)'
        "
      >
        <layout-admin-sider></layout-admin-sider>
      </el-aside>
      <el-main>
        <layout-admin-tab></layout-admin-tab>
        <layout-admin-main>
          <template #main-router-view>
            <slot name="router-view"></slot>
          </template>
        </layout-admin-main>
        <el-footer v-if="baseStore.adminShowFooter">
          <layout-admin-footer></layout-admin-footer>
        </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
:deep(.el-header) {
  height: var(--wings-header-height);
  padding: 0 1.8rem !important;
  background-color: var(--wings-header-bg-color);
}

:deep(.el-container) {
  background-color: var(--wings-menu-bg-color);
}

:deep(.el-aside) {
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-main) {
  padding: var(--wings-main-padding);
  background: var(--wings-main-fill);
}
</style>
