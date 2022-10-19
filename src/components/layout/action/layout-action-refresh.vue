<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});

const refresh = () => {};
</script>

<template>
  <div cursor-pointer flex items-center>
    <svg-icon
      @click="refresh"
      cursor-pointer
      size="1.2rem"
      name="arrow-sync"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
