<script lang="ts" setup name="layout-action-color-scheme">
import { useDark } from '@/hooks/use-dark';

const { changeDark } = useDark();

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
