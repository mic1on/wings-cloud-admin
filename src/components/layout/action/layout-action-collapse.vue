<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <div flex items-center cursor-pointer @click="baseStore.changeCollapse()">
    <el-icon :size="20" color="var(--ep-text-color-primary)">
      <Fold v-if="baseStore.collapse" />
      <Expand v-else />
    </el-icon>
  </div>
</template>
