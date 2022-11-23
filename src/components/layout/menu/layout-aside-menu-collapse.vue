<script lang="ts" setup name="layout-action-collapse">
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

const systemStore = useSystemStore();

const changeCollapse = (): void => {
  systemStore.collapse = !systemStore.collapse;
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
    :class="[
      systemStore.colorScheme,
      systemStore.settings.Layout,
      'layout-aside-menu-collapse',
    ]"
  >
    <el-button
      v-if="systemStore.collapse"
      bg
      text
      circle
      :icon="DArrowRight"
    ></el-button>
    <el-button v-else bg text circle :icon="DArrowLeft"></el-button>
  </div>
</template>
