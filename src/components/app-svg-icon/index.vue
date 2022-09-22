<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  customStyle: {
    type: String,
    default: '',
  },
});

const symbolId = computed(
  () => `#${props.prefix}-${props.name.replace('icon-', '')}`
);
</script>

<template>
  <svg
    aria-hidden="true"
    :class="`iconfont ${className}`"
    :style="`${customStyle};`"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
