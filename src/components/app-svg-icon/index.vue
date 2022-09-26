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
  <i
    flex
    items-center
    justify-center
    style="
      width: var(--ep-menu-icon-width);
      margin-right: 5px;
      text-align: center;
      vertical-align: middle;
    "
  >
    <svg
      aria-hidden="true"
      :class="`iconfont ${className}`"
      :style="`width:${size};height:${size};line-height:${height};${customStyle};`"
    >
      <use :xlink:href="symbolId" />
    </svg>
  </i>
</template>
