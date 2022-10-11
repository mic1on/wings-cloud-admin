<script lang="ts" setup>
const { t } = useI18n();
</script>
<template>
  <wings-crud-card>
    <template #content>
      <div text-4>{{ t('admin.workbench.shortcuts') }} </div>
    </template>
  </wings-crud-card>
</template>
