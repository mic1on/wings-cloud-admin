<script lang="ts" setup name="layout-admin-aside">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();
</script>

<template>
  <div
    :class="[
      baseStore.settings.ColorScheme,
      baseStore.settings.Layout,
      'layout-admin-aside',
    ]"
  >
    <layout-admin-logo
      v-if="
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_DARK ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN
      "
      style="height: var(--wings-aside-logo-height)"
    ></layout-admin-logo>
    <layout-admin-menu></layout-admin-menu>
    <layout-aside-menu-collapse></layout-aside-menu-collapse>
  </div>
</template>
