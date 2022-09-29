<script lang="ts" setup>
import useAppStore from '@/hooks/app-store';

const { t } = useI18n();

const appStore = useAppStore();
</script>
<template>
  <wings-card>
    <template #header>
      <div text-5>
        <span p-r-4>{{ t('admin.workbench.welcome') }}</span>
        <span>{{ appStore.user.userInfo.nickname }}</span>
      </div>
    </template>
    <template #content> </template>
  </wings-card>
</template>

<style lang="scss" scoped>
:deep(.ep-card) {
  border: 0 !important;
}
</style>
