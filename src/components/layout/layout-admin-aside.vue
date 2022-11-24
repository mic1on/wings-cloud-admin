<script lang="ts" setup name="layout-admin-aside">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { SettingsValueEnum } from '@/constants/enums';

const systemStore = useSystemStore();
</script>

<template>
  <div
    :class="[
      systemStore.colorScheme,
      systemStore.settings.Layout,
      'layout-admin-aside',
    ]"
  >
    <layout-admin-logo
      v-if="
        systemStore.isMobile ||
        (!systemStore.isMobile &&
          systemStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP &&
          systemStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP_LEAN)
      "
      style="height: var(--wings-aside-logo-height)"
    ></layout-admin-logo>
    <layout-admin-menu></layout-admin-menu>
    <layout-menu-collapse v-if="!systemStore.isMobile"></layout-menu-collapse>
  </div>
</template>
