<script lang="ts" setup name="layout-admin-copyright">
const { t } = useI18n();
</script>

<template>
  <div
    flex
    items-center
    justify-center
    style="padding: var(--wings-main-padding)"
  >
    <div text-4 style="color: var(--el-text-color-secondary)">
      {{ t('base.appCopyright') }}
    </div>
  </div>
</template>
