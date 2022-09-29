<script lang="ts" setup>
import AdminLayoutHeader from './header.vue';
import AdminLayoutTab from './tab.vue';
import AdminLayoutFooter from './footer.vue';
import AdminLayoutSider from './sider.vue';
import useAppStroe from '@/hooks/app-store';

const appStore = useAppStroe();
</script>

<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-aside
      important="
      transition-width
      transition-duration-500"
      :style="`width:${appStore.app.adminMenuWidth};background: var(--ep-bg-color-overlay);border-right:1px solid var(--ep-border-color-light)`"
    >
      <admin-layout-sider></admin-layout-sider>
    </el-aside>
    <el-container>
      <el-header
        :style="`background: var(--ep-bg-color-overlay);height:${appStore.app.adminHeaderHeight};`"
        important="p-x-6"
      >
        <admin-layout-header></admin-layout-header>
      </el-header>
      <admin-layout-tab
        style="
          background: var(--ep-bg-color-overlay);
          border-bottom: 1px solid var(--ep-border-color-light);
        "
      ></admin-layout-tab>
      <el-main style="background: var(--ep-bg-color-fill)">
        <slot name="router-view"></slot>
      </el-main>
      <el-footer
        v-if="appStore.app.adminShowFooter"
        style="background: var(--ep-bg-color-overlay)"
      >
        <admin-layout-footer></admin-layout-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
