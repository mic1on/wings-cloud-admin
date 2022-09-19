<script lang="ts" setup>
import useApp from '@/hooks/app';

const app = useApp();
</script>

<template>
  <div mr-8 h-full cursor-pointer flex items-center @click="app.changeDark()">
    <i text-4 inline-flex i="dark:ep-moon ep-sunny" />
  </div>
</template>
