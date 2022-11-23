<script lang="ts" setup name="layout-admin-header">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/constants/enums';

const { baseStore } = useStore();
</script>
<template>
  <div h-full flex items-center justify-between box-border>
    <div h-full flex items-center>
      <layout-toolbar-mobile-menu v-if="baseStore.isMobile">
      </layout-toolbar-mobile-menu>
      <layout-admin-logo
        v-if="
          !baseStore.isMobile &&
          (baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
            baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN)
        "
      ></layout-admin-logo>
      <layout-admin-menu
        mode="horizontal"
        v-if="
          !baseStore.isMobile &&
          baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
        "
      ></layout-admin-menu>
      <layout-admin-breadcrumb
        v-if="
          !baseStore.isMobile &&
          baseStore.settings.Breadcrumb ===
            SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER
        "
      ></layout-admin-breadcrumb>
    </div>
    <layout-toolbar></layout-toolbar>
  </div>
</template>
