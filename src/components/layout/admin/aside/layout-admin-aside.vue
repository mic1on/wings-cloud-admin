<script lang="ts" setup name="layout-admin-aside">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();
</script>

<template>
  <div
    :class="[
      baseStore.colorScheme,
      baseStore.settings.Layout,
      'layout-admin-aside',
    ]"
  >
    <layout-admin-logo
      v-if="
        baseStore.isMobile ||
        (!baseStore.isMobile &&
          baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP &&
          baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP_LEAN)
      "
      style="height: var(--wings-aside-logo-height)"
    ></layout-admin-logo>
    <layout-admin-menu></layout-admin-menu>
    <layout-aside-menu-collapse
      v-if="!baseStore.isMobile"
    ></layout-aside-menu-collapse>
  </div>
</template>
