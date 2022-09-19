<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import PagesLayoutHeader from './header.vue';
import PagesLayoutFooter from './footer.vue';

const { y } = useWindowScroll();
</script>
<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-header
      important="p-0 m-0 w-full h-16"
      fixed
      top-0
      z-999
      box-border
      transition-all
      :style="
        y === 0
          ? 'background:rgba(0,0,0,0);box-shadow:none;'
          : 'background:var(--ep-bg-color-overlay);box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);'
      "
    >
      <pages-layout-header></pages-layout-header>
    </el-header>
    <el-main important="p-0 m-0" style="background: var(--ep-bg-color-page)">
      <slot name="router-view"></slot>
    </el-main>
    <el-footer
      important="p-0 m-0 h-a w-full box-border"
      style="background: var(--ep-bg-color-overlay)"
    >
      <pages-layout-footer></pages-layout-footer>
    </el-footer>
  </el-container>
</template>
