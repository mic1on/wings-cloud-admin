<script lang="ts" setup>
import AdminLayoutHeader from './header.vue';
import AdminLayoutTab from './tab.vue';
import AdminLayoutFooter from './footer.vue';
import AdminLayoutSider from './sider.vue';
import { stores } from '@/plugins/pinia';

const appStore = stores['app'].default();
</script>

<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-aside
      important="
      transition-width
      transition-duration-500"
      :style="`width:${appStore.adminMenuWidth};background: var(--ep-bg-color-overlay)`"
    >
      <admin-layout-sider></admin-layout-sider>
    </el-aside>
    <el-container>
      <el-header
        :style="`background: var(--ep-bg-color-overlay);height:${appStore.adminHeaderHeight};`"
        important="p-x-6"
      >
        <admin-layout-header></admin-layout-header>
      </el-header>
      <admin-layout-tab></admin-layout-tab>
      <el-main style="background: var(--ep-bg-color-page)">
        <slot name="router-view"></slot>
      </el-main>
      <el-footer
        v-if="appStore.adminShowFooter"
        style="background: var(--ep-bg-color-overlay)"
      >
        <admin-layout-footer></admin-layout-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
