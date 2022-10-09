<script lang="ts" setup>
import { stores } from '@/plugins/pinia';

const appStore = stores['app'].default();
</script>

<template>
  <div flex items-center cursor-pointer @click="appStore.changeCollapse()">
    <el-icon :size="20" color="var(--ep-text-color-primary)">
      <Fold v-if="appStore.collapse" />
      <Expand v-else />
    </el-icon>
  </div>
</template>
