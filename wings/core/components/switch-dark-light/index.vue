<script lang="ts" setup>
import { useWingsApp } from '@wings';

const { changeDark } = useWingsApp();
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
