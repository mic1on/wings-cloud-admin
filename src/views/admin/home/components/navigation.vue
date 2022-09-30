<script lang="ts" setup>
import useAppStore from '@/hooks/app-store';

const { t } = useI18n();
</script>
<template>
  <wings-card>
    <template #content>
      <div text-4>{{ t('admin.workbench.shortcuts') }} </div>
    </template>
  </wings-card>
</template>
