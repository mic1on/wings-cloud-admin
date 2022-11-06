<script lang="ts" setup name="layout-action-setting">
import { RouteEnum } from '@/enums';

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});

const router = useRouter();

const openSetting = () => {
  router.push({ path: RouteEnum.ROUTE_SYSTEM_SETTINGS });
};
</script>

<template>
  <div cursor-pointer flex items-center @click="openSetting">
    <svg-icon
      @click="openSetting"
      cursor-pointer
      size="1.2rem"
      name="setting"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
