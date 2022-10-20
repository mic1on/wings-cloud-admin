<script lang="ts" setup>
const props = defineProps({
  shadow: {
    type: String,
    default: 'never',
  },
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <el-card :shadow="props.shadow" important="border-none transition-duration-0">
    <template #header v-if="props.title || props.subTitle">
      <div text-6 style="color: var(--el-text-color-primary)">
        {{ props.title }}
      </div>
      <div
        v-if="props.subTitle"
        text-4
        mt-2
        style="color: var(--el-text-color-regular)"
      >
        {{ props.subTitle }}
      </div>
    </template>
    <slot name="header" v-if="!props.title || !props.subTitle"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </el-card>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  border: 0 !important;
}
</style>
