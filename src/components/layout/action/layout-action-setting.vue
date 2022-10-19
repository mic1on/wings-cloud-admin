<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});

const openSetting = () => {};
</script>

<template>
  <div cursor-pointer flex items-center>
    <svg-icon
      @click="openSetting"
      cursor-pointer
      size="1.22rem"
      name="setting"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
