<script lang="ts" setup>
import useApp from '@/hooks/app';

const app = useApp();
</script>

<template>
  <i
    cursor-pointer
    @click="app.changeDark()"
    style="color: var(--ep-text-color-primary)"
    text-4
    inline-flex
    i="dark:ep-moon ep-sunny"
  />
</template>
