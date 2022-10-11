<script lang="ts" setup>
import ActionAvatar from '../action-avatar/index.vue';
import ActionLanguage from '../action-language/index.vue';
import ActionNotifications from '../action-notifications/index.vue';
import ActionRefresh from '../action-refresh/index.vue';
import SwitchDarkLight from '../switch-dark-light/index.vue';
import SwitchCollapse from '../switch-collapse/index.vue';
import SwitchFullscreen from '../switch-fullscreen/index.vue';
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
