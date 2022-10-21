<script lang="ts" setup name="layout-action-setting">
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
      size="1.28rem"
      name="setting"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
