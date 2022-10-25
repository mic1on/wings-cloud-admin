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
        mr-8
        v-if="baseStore.settings.Dark"
      ></layout-action-color-scheme>
      <layout-action-language
        mr-8
        only-icon
        v-if="baseStore.settings.Language"
      ></layout-action-language>
      <layout-action-refresh
        mr-8
        v-if="baseStore.settings.Refresh"
      ></layout-action-refresh>
      <layout-action-notification
        mr-8
        v-if="baseStore.settings.Notification"
      ></layout-action-notification>
      <layout-action-fullscreen
        mr-8
        v-if="baseStore.settings.Fullscreen"
      ></layout-action-fullscreen>
      <layout-action-setting
        mr-8
        v-if="baseStore.settings.Setting"
      ></layout-action-setting>
      <layout-action-avatar></layout-action-avatar>
    </div>
  </div>
</template>
