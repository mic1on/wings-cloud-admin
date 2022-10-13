<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>
<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-header
      important="fixed p-0 m-0 w-full h-16 top-0 z-999 box-border transition-all"
      :style="
        y === 0
          ? 'background:var(--ep-bg-color-page);border-bottom: 1px solid rgba(0,0,0,0);'
          : 'background:var(--ep-bg-color-page);border-bottom: 1px solid var(--ep-border-color-light);'
      "
    >
      <layout-website-header></layout-website-header>
    </el-header>
    <el-main important="p-0 m-0" style="background: var(--ep-bg-color-page)">
      <slot name="router-view"></slot>
    </el-main>
    <el-footer
      important="p-0 m-0 h-a w-full box-border"
      style="
        background: var(--ep-bg-color-page);
        border-top: 1px solid var(--ep-border-color-light);
      "
    >
      <layout-website-footer></layout-website-footer>
    </el-footer>
  </el-container>
</template>
