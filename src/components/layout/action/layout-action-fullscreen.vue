<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <div flex items-center justify-center>
    <svg-icon
      @click="toggle"
      size="1.2rem"
      cursor-pointer
      custom-style="color: var(--ep-text-color-primary)"
      :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>
