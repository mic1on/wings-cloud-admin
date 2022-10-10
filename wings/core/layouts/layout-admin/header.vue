<script lang="ts" setup>
import {
  ActionAvatar,
  ActionLanguage,
  ActionNotifications,
  ActionRefresh,
  SwitchDarkLight,
  SwitchCollapse,
  SwitchFullscreen,
} from '@/layouts/components';
</script>
<template>
  <div h-full flex items-center justify-between>
    <div h-full flex items-center>
      <switch-collapse mr-8></switch-collapse>
      <action-refresh></action-refresh>
    </div>
    <div h-full flex items-center>
      <switch-fullscreen mr-8></switch-fullscreen>
      <switch-dark-light mr-8></switch-dark-light>
      <action-language mr-8 only-icon></action-language>
      <action-notifications mr-8></action-notifications>
      <action-avatar></action-avatar>
    </div>
  </div>
</template>
