<script lang="ts" setup>
import {
  ActionAvatar,
  ActionLanguage,
  ActionNotifications,
  SwitchDarkLight,
} from '@/layouts/components';
</script>
<template>
  <div h-full flex items-center justify-between>
    <div h-full></div>
    <div h-full flex items-center>
      <switch-dark-light></switch-dark-light>
      <action-language mr-8 only-icon></action-language>
      <action-notifications></action-notifications>
      <action-avatar></action-avatar>
    </div>
  </div>
</template>
