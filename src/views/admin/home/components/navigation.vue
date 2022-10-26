<script lang="ts" setup>
const { t } = useI18n();
</script>
<template>
  <crud-card>
    <template #content>
      <div text-4>{{ t('admin.home.workbench.shortcuts') }} </div>
    </template>
  </crud-card>
</template>
