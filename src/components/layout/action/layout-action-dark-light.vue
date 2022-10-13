<script lang="ts" setup>
import { useApp } from '@/hooks/use-app';

const { changeDark } = useApp();
</script>

<template>
  <i
    cursor-pointer
    @click="changeDark()"
    style="color: var(--ep-text-color-primary)"
    text-4
    inline-flex
    i="dark:ep-moon ep-sunny"
  />
</template>
