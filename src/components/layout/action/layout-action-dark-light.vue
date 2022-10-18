<script lang="ts" setup>
import { useApp } from '@/hooks/use-app';

const { changeDark } = useApp();

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});
</script>

<template>
  <i
    cursor-pointer
    @click="changeDark()"
    :style="{ color: props.color }"
    text-4
    inline-flex
    i="dark:ep-moon ep-sunny"
  />
</template>
