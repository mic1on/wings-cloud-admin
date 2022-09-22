<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<template>
  <app-svg-icon
    @click="toggle"
    w-5
    h-5
    cursor-pointer
    custom-style="color: var(--ep-text-color-primary)"
    :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
  ></app-svg-icon>
</template>
