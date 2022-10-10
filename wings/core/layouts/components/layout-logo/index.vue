<script lang="ts" setup>
import { useWingsStore } from '@wings';

const route = useRoute();
const router = useRouter();

const appName = import.meta.env.APP_NAME;

const { appStore } = useWingsStore();

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
    flex
    items-center
    justify-center
    content-center
    cursor-pointer
    @click="goHomeRoute"
    :style="
      route.path.indexOf('admin') !== -1
        ? `height:${appStore.adminHeaderHeight}`
        : ''
    "
  >
    <img h-6 src="@/assets/logo.svg" />
    <div
      ml-4
      text-4
      font-600
      text-center
      v-show="route.path.indexOf('admin') !== -1 && !appStore.collapse"
      class="single-line-omitted"
      style="color: var(--ep-text-color-primary)"
    >
      {{ appName }}
    </div>
  </div>
</template>
