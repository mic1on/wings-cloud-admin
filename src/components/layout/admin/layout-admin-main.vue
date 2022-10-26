<script lang="ts" setup name="layout-admin-main">
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();

const height = computed(() => {
  let _height = '100vh';
  if (
    baseStore.settings.Layout === 'top' ||
    baseStore.settings.Layout === 'top-lean' ||
    baseStore.settings.Layout === 'aside'
  ) {
    _height =
      'calc(100vh - var(--wings-header-height) - var(--wings-tab-height))';
  } else {
    _height = 'calc(100vh - var(--wings-tab-height))';
  }
  if (!baseStore.settings.Tab) {
    _height = `calc(${_height} + var(--wings-tab-height))`;
  }
  return 'height: ' + _height;
});
</script>

<template>
  <el-scrollbar
    :wrap-style="[height, { 'box-sizing': 'border-box' }]"
    view-style="
        height: 100%;
				box-sizing: border-box;
        transition: all var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier);"
  >
    <div
      style="
        box-sizing: border-box;
        height: 100%;
        padding: var(--wings-main-padding);
        background: var(--wings-main-fill);
        transition: all var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier);
      "
    >
      <!-- TODO 面包屑预留位置 -->
      <div></div>
      <div style="padding-bottom: var(--wings-main-padding)">
        <slot name="main-router-view"></slot>
      </div>

      <!-- TODO 版权信息预留位置 -->
      <div></div>
    </div>
  </el-scrollbar>
</template>
