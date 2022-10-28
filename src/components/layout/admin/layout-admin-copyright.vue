<script lang="ts" setup name="layout-admin-copyright">
const copyRight = import.meta.env.APP_COPYRIGHT;
</script>

<template>
  <div
    flex
    items-center
    justify-center
    style="padding: var(--wings-main-padding)"
  >
    <div text-4 style="color: var(--el-text-color-secondary)">
      {{ copyRight }}
    </div>
  </div>
</template>
