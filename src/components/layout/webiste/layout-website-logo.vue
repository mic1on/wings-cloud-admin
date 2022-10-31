<script lang="ts" setup name="layout-website-logo">
import { useStore } from '@/hooks/use-store';
import { DefaultSettings } from '@/settings';

const route = useRoute();
const router = useRouter();

const appName = import.meta.env.APP_NAME;

const { baseStore } = useStore();

const goHomeRoute = () => {
  if (route.path.indexOf('website') !== -1) {
    router.push({ path: DefaultSettings.FirstRoute });
  } else if (route.path.indexOf('admin') !== -1) {
    router.push({ path: DefaultSettings.AdminFirstRoute });
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
  >
    <img h-6 src="@/assets/svgs/logo.svg" />
    <div
      ml-4
      text-4
      font-600
      text-center
      v-show="route.path.indexOf('admin') !== -1 && !baseStore.collapse"
      class="single-line-omitted"
    >
      {{ appName }}
    </div>
  </div>
</template>
