<script lang="ts" setup>
import AdminLayoutHeader from './header.vue';
import AdminLayoutTab from './tab.vue';
import AdminLayoutFooter from './footer.vue';
import AdminLayoutSider from './sider.vue';
import { useWingsStore } from '@wings';

const { appStore } = useWingsStore();
</script>

<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-aside
      important="
      transition-width
      transition-duration-500"
      :width="appStore.adminMenuWidth"
      style="background: var(--ep-bg-color-page)"
    >
      <admin-layout-sider></admin-layout-sider>
    </el-aside>
    <el-container>
      <el-header
        important="p-x-6"
        :height="appStore.adminHeaderHeight"
        style="background: var(--ep-bg-color-overlay)"
      >
        <admin-layout-header></admin-layout-header>
      </el-header>
      <admin-layout-tab
        style="background: var(--ep-bg-color-overlay)"
      ></admin-layout-tab>
      <el-main
        style="
          background: var(--ep-bg-color-fill);
          box-shadow: 10px 0 10px -10px rgb(0 0 0 / 12%);
        "
      >
        <slot name="router-view"></slot>
      </el-main>
      <el-footer
        v-if="appStore.adminShowFooter"
        style="background: var(--ep-bg-color-overlay)"
        :height="appStore.adminFooterHeight"
      >
        <admin-layout-footer></admin-layout-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
