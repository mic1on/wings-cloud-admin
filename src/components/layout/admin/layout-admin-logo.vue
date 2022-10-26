<script lang="ts" setup name="layout-admin-logo">
import { useStore } from '@/hooks/use-store';

const router = useRouter();

const { baseStore } = useStore();

const appName = import.meta.env.APP_NAME;

const goHomeRoute = () => {
  router.push({ path: import.meta.env.APP_ADMIN_FIRST_ROUTE });
};
</script>

<template>
  <div
    flex
    items-center
    justify-center
    content-center
    cursor-pointer
    @click="goHomeRoute()"
  >
    <div
      text-6
      font-600
      text-center
      class="single-line-omitted"
      :style="
        baseStore.settings.Layout === 'aside'
          ? 'color: var(--wings-menu-text-color)'
          : 'color: var(--wings-header-text-color)'
      "
    >
      {{ appName }}
    </div>
  </div>
</template>
