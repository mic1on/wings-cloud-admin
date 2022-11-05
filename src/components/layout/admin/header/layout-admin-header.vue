<script lang="ts" setup name="layout-admin-header">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();
</script>
<template>
  <div h-full flex items-center justify-between box-border>
    <div h-full flex items-center>
      <layout-admin-logo
        v-if="
          baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
          baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
        "
      ></layout-admin-logo>
      <layout-admin-menu
        mode="horizontal"
        v-if="baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN"
      ></layout-admin-menu>
      <layout-admin-breadcrumb
        v-if="
          baseStore.settings.Breadcrumb ===
          SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER
        "
      ></layout-admin-breadcrumb>
    </div>
    <div
      h-full
      flex
      items-center
      justify-end
      p-x-6
      style="box-sizing: border-box; width: var(--wings-header-toobar-width)"
    >
      <layout-toolbar-color-scheme
        ml-8
        v-if="baseStore.settings.Toolbar.Dark"
      ></layout-toolbar-color-scheme>
      <layout-toolbar-language
        ml-8
        only-icon
        v-if="baseStore.settings.Toolbar.Language"
      ></layout-toolbar-language>
      <layout-toolbar-refresh
        ml-8
        v-if="baseStore.settings.Toolbar.Refresh"
      ></layout-toolbar-refresh>
      <layout-toolbar-notification
        ml-8
        v-if="baseStore.settings.Toolbar.Notification"
      ></layout-toolbar-notification>
      <layout-toolbar-fullscreen
        ml-8
        v-if="baseStore.settings.Toolbar.Fullscreen"
      ></layout-toolbar-fullscreen>
      <layout-toolbar-setting
        ml-8
        v-if="baseStore.settings.Toolbar.Setting"
      ></layout-toolbar-setting>
      <layout-toolbar-avatar
        ml-8
        v-if="baseStore.settings.Toolbar.Avatar"
      ></layout-toolbar-avatar>
    </div>
  </div>
</template>
