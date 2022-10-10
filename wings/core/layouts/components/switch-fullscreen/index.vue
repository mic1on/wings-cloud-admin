<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<template>
  <div flex items-center justify-center>
    <wings-svg-icon
      @click="toggle"
      size="1.2rem"
      cursor-pointer
      custom-style="color: var(--ep-text-color-primary)"
      :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
    ></wings-svg-icon>
  </div>
</template>
