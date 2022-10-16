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
            ? 'width:var(--wings-aside-width-fold)'
            : 'width: var(--wings-aside-width)'
        "
      >
        <layout-admin-sider></layout-admin-sider>
      </el-aside>
      <el-main>
        <layout-admin-tab></layout-admin-tab>
        <layout-admin-main>
          <template #router-view>
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
:deep(.ep-header) {
  height: var(--wings-header-height);
  padding: 0 1.8rem !important;
  background-color: var(--wings-header-bg-color);
}

:deep(.ep-main) {
  padding: 0;
  background: var(--wings-main-fill);
}
</style>
