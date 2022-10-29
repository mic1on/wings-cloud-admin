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
      <layout-action-color-scheme
        ml-8
        v-if="baseStore.settings.Toolbar.Dark"
      ></layout-action-color-scheme>
      <layout-action-language
        ml-8
        only-icon
        v-if="baseStore.settings.Toolbar.Language"
      ></layout-action-language>
      <layout-action-refresh
        ml-8
        v-if="baseStore.settings.Toolbar.Refresh"
      ></layout-action-refresh>
      <layout-action-notification
        ml-8
        v-if="baseStore.settings.Toolbar.Notification"
      ></layout-action-notification>
      <layout-action-fullscreen
        ml-8
        v-if="baseStore.settings.Toolbar.Fullscreen"
      ></layout-action-fullscreen>
      <layout-action-setting
        ml-8
        v-if="baseStore.settings.Toolbar.Setting"
      ></layout-action-setting>
      <layout-action-avatar
        ml-8
        v-if="baseStore.settings.Toolbar.Avatar"
      ></layout-action-avatar>
    </div>
  </div>
</template>
