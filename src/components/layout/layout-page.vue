<script lang="ts" setup>
defineOptions({
  name: 'LayoutPage',
});
</script>
<template>
  <el-container style="background: var(--el-bg-color)">
    <slot name="router-view"></slot>
  </el-container>
</template>
