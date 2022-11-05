<script lang="ts" setup name="layout-action-collapse">
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();

const changeCollapse = (): void => {
  baseStore.collapse = !baseStore.collapse;
};
</script>

<template>
  <div
    flex
    items-center
    justify-center
    cursor-pointer
    style="height: var(--wings-collapse-height)"
    @click="changeCollapse()"
  >
    <el-button
      v-if="baseStore.collapse"
      bg
      text
      circle
      :icon="DArrowRight"
    ></el-button>
    <el-button v-else bg text circle :icon="DArrowLeft"></el-button>
  </div>
</template>
