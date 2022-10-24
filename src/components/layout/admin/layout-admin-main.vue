<script lang="ts" setup name="layout-admin-main">
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();

const computedHeight = () => {
  let height = '100vh';
  if (baseStore.layout !== 'aside') {
    height =
      'calc(100vh - var(--wings-header-height) - var(--wings-tab-height))';
  } else {
    height = 'height: calc(100vh - var(--wings-tab-height));';
  }
  let _height = height;
  if (!baseStore.showTab) {
    _height = `calc(${height} + var(--wings-tab-height))`;
  }
  return _height;
};
</script>

<template>
  <div :style="{ height: computedHeight() }">
    <el-scrollbar
      wrap-style="box-sizing: border-box;
      padding: var(--wings-main-padding);
      background: var(--wings-main-fill);
  		transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);"
    >
      <slot name="main-router-view"></slot>
    </el-scrollbar>
  </div>
</template>
