<script lang="ts" setup>
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

defineOptions({
  name: 'LayoutAdminCollapse',
});

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
    style="height: var(--wings-cloud-collapse-height)"
    @click="changeCollapse()"
    :class="[
      'wings-cloud-' + systemStore.colorScheme,
      'wings-cloud-' + systemStore.settings.Layout,
      'wings-cloud-layout-aside-menu-collapse',
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
