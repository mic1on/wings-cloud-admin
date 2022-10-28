<script lang="ts" setup name="layout-admin-logo">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

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
    :style="
      baseStore.collapse &&
      (baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN)
        ? 'width:var(--wings-aside-width-fold)'
        : 'width: var(--wings-aside-width)'
    "
  >
    <div class="logo" flex items-center justify-center>
      <img w-10 h-10 src="@/assets/svgs/logo.svg" alt="" />
    </div>
    <div
      text-6
      font-600
      text-center
      ml-4
      v-if="
        !baseStore.collapse ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
      "
      class="single-line-omitted"
      :style="
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN
          ? 'color: var(--wings-menu-text-color)'
          : 'color: var(--wings-header-text-color)'
      "
    >
      {{ appName }}
    </div>
  </div>
</template>
