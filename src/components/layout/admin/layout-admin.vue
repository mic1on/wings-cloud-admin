<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-aside
      important="
      transition-width
      transition-duration-500"
      :width="baseStore.adminMenuWidth"
      style="background: var(--ep-bg-color-page)"
    >
      <layout-admin-sider></layout-admin-sider>
    </el-aside>
    <el-container>
      <el-header
        important="p-x-6"
        :height="baseStore.adminHeaderHeight"
        style="background: var(--ep-bg-color-overlay)"
      >
        <layout-admin-header></layout-admin-header>
      </el-header>
      <layout-admin-tab
        style="background: var(--ep-bg-color-overlay)"
      ></layout-admin-tab>
      <el-main
        style="
          background: var(--ep-bg-color-fill);
          box-shadow: 10px 0 10px -10px rgb(0 0 0 / 12%);
        "
      >
        <slot name="router-view"></slot>
      </el-main>
      <el-footer
        v-if="baseStore.adminShowFooter"
        style="background: var(--ep-bg-color-overlay)"
        :height="baseStore.adminFooterHeight"
      >
        <layout-admin-footer></layout-admin-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
