<script lang="ts" setup>
const props = defineProps({
  shadow: {
    type: String,
    default: 'nerver',
  },
});
</script>
<template>
  <el-card
    :shadow="props.shadow"
    important="border-none transition-duration-300"
  >
    <slot name="header"></slot>
    <slot name="content"></slot>
  </el-card>
</template>
