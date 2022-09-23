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
  size: { type: String, default: '1.2rem' },
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
    :style="`width:${size};height:${size};${customStyle};`"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
