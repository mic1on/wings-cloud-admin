<script lang="ts" setup>
import { stores } from '@/plugins/pinia';

const route = useRoute();
const router = useRouter();

const appName = import.meta.env.APP_NAME;

const appStore = stores['app'].default();

const goHomeRoute = (): void => {
  if (route.path.indexOf('website') !== -1) {
    router.push({ path: import.meta.env.APP_FIRST_ROUTE });
  } else if (route.path.indexOf('admin') !== -1) {
    router.push({ path: import.meta.env.APP_ADMIN_FIRST_ROUTE });
  }
};
</script>

<template>
  <div
    cursor-pointer
    flex
    items-center
    justify-center
    content-center
    @click="goHomeRoute"
    :style="
      route.path.indexOf('admin') !== -1
        ? `height:${appStore.adminHeaderHeight}`
        : ''
    "
  >
    <img h-6 src="@/assets/logo.svg" />
    <div
      v-if="route.path.indexOf('admin') !== -1"
      ml-4
      text-center
      font-600
      text-4
      style="color: var(--ep-text-color-primary)"
    >
      {{ appName }}
    </div>
  </div>
</template>
