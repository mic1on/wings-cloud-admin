<script lang="ts" setup>
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
        v-if="baseStore.toolbarSettings.dark"
      ></layout-action-color-scheme>
      <layout-action-language
        mr-8
        only-icon
        v-if="baseStore.toolbarSettings.language"
      ></layout-action-language>
      <layout-action-refresh
        mr-8
        v-if="baseStore.toolbarSettings.refresh"
      ></layout-action-refresh>
      <layout-action-notifications
        mr-8
        v-if="baseStore.toolbarSettings.notifications"
      ></layout-action-notifications>
      <layout-action-fullscreen
        mr-8
        v-if="baseStore.toolbarSettings.fullscreen"
      ></layout-action-fullscreen>
      <layout-action-setting
        mr-8
        v-if="baseStore.toolbarSettings.setting"
      ></layout-action-setting>
      <layout-action-avatar></layout-action-avatar>
    </div>
  </div>
</template>
