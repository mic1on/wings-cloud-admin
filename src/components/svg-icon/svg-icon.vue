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
  color: {
    type: String,
    default: 'var(--ep-text-color-primary)',
  },
  customStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
  showEpWidth: {
    type: Boolean,
    default: false,
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
    style="margin-right: 5px; text-align: center; vertical-align: middle"
    :style="{ width: props.showEpWidth ? 'var(--ep-menu-icon-width)' : 'auto' }"
  >
    <svg
      aria-hidden="true"
      :class="`iconfont ${props.className}`"
      :style="`width:${props.size};height:${props.size};line-height:${props.size};color:${props.color};${props.customStyle};`"
    >
      <use :xlink:href="symbolId" />
    </svg>
  </i>
</template>
