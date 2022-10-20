<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <div flex items-center cursor-pointer @click="baseStore.changeCollapse()">
    <el-icon :size="20" style="color: var(--el-text-color-primary)">
      <Expand v-if="baseStore.collapse" />
      <Fold v-else />
    </el-icon>
  </div>
</template>
