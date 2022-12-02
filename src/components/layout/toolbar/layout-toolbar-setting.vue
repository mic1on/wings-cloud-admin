<script lang="ts" setup>
import { RouteEnum } from '@/constants/enums';

defineOptions({
  name: 'LayoutToolbarSetting',
});

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-cloud-header-text-color)',
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
      size="1.28rem"
      name="base-setting"
      :color="props.color"
    ></svg-icon>
  </div>
</template>
