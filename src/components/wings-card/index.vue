<script lang="ts" setup>
const props = defineProps({
  shadow: {
    type: String,
    default: 'never',
  },
});
</script>
<template>
  <el-card :shadow="props.shadow" important="border-none transition-duration-0">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </el-card>
</template>

<style lang="scss" scoped>
:deep(.ep-card) {
  border: 0 !important;
}
</style>
