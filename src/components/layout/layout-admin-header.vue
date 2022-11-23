<script lang="ts" setup name="layout-admin-header">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { SettingsValueEnum } from '@/constants/enums';

const systemStore = useSystemStore();
</script>
<template>
  <div h-full flex items-center justify-between box-border>
    <div h-full flex items-center>
      <layout-toolbar-mobile-menu v-if="systemStore.isMobile">
      </layout-toolbar-mobile-menu>
      <layout-admin-logo
        v-if="
          !systemStore.isMobile &&
          (systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
            systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN)
        "
      ></layout-admin-logo>
      <layout-admin-menu
        mode="horizontal"
        v-if="
          !systemStore.isMobile &&
          systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
        "
      ></layout-admin-menu>
      <layout-admin-breadcrumb
        v-if="
          !systemStore.isMobile &&
          systemStore.settings.Breadcrumb ===
            SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER
        "
      ></layout-admin-breadcrumb>
    </div>
    <layout-toolbar></layout-toolbar>
  </div>
</template>
