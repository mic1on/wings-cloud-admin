<script lang="ts" setup>
import useBase from '@/hooks/base';

const { t } = useI18n();
</script>
<template>
  <wings-card>
    <template #content>
      <div text-4>{{ t('admin.workbench.shortcuts') }} </div>
    </template>
  </wings-card>
</template>
