<script lang="ts" setup></script>
<template>
  <div h-full flex items-center justify-between>
    <div h-full flex items-center>
      <layout-action-collapse mr-8></layout-action-collapse>
      <layout-action-refresh></layout-action-refresh>
    </div>
    <div h-full flex items-center>
      <layout-action-fullscreen mr-8></layout-action-fullscreen>
      <layout-action-dark-light mr-8></layout-action-dark-light>
      <layout-action-language mr-8 only-icon></layout-action-language>
      <layout-action-notifications mr-8></layout-action-notifications>
      <layout-action-avatar></layout-action-avatar>
    </div>
  </div>
</template>
