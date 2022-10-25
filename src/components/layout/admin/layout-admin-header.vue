<script lang="ts" setup name="layout-admin-header">
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>
<template>
  <div h-full flex items-center justify-between>
    <div h-full flex items-center>
      <layout-admin-logo></layout-admin-logo>
    </div>
    <div h-full flex items-center>
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
