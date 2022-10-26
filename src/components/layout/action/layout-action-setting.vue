<script lang="ts" setup name="layout-action-setting">
const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});

const router = useRouter();

const openSetting = () => {
  router.push({ path: '/admin/system-management/system-setting' });
};
</script>

<template>
  <div cursor-pointer flex items-center @click="openSetting">
    <svg-icon
      @click="openSetting"
      cursor-pointer
      size="1.28rem"
      name="setting"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
