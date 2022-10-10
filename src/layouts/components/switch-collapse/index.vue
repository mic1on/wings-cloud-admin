<script lang="ts" setup>
import { useWingsStore } from '@/hooks';

const { appStore } = useWingsStore();
</script>

<template>
  <div flex items-center cursor-pointer @click="appStore.changeCollapse()">
    <el-icon :size="20" color="var(--ep-text-color-primary)">
      <Fold v-if="appStore.collapse" />
      <Expand v-else />
    </el-icon>
  </div>
</template>
