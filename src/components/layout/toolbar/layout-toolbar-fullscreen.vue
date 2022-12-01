<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

defineOptions({
  name: 'LayoutToolbarFullscreen',
});

const { isFullscreen, toggle } = useFullscreen();

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-cloud-header-text-color)',
  },
});
</script>

<template>
  <div flex items-center justify-center>
    <svg-icon
      @click="toggle"
      size="1.22rem"
      cursor-pointer
      :color="props.color"
      :name="isFullscreen ? 'base-exit-fullscreen' : 'base-fullscreen'"
    ></svg-icon>
  </div>
</template>
