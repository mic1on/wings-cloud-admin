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
  color: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
  style: {
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
    :style="`color:${color};${style};`"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
