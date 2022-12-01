<script lang="ts" setup>
defineOptions({
  name: 'LayoutToolbarRefresh',
});

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-cloud-header-text-color)',
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
      name="base-arrow-sync"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
