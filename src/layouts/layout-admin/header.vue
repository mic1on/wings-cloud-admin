<script lang="ts" setup>
import {
  ActionAvatar,
  ActionLanguage,
  ActionNotifications,
  SwitchDarkLight,
  SwitchCollapse,
  SwitchFullscreen,
} from '@/layouts/components';
</script>
<template>
  <div h-full flex items-center justify-between>
    <div h-full flex items-center>
      <switch-collapse></switch-collapse>
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
