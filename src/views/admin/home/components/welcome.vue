<script lang="ts" setup>
import useAppStore from '@/hooks/app-store';

const { t } = useI18n();

const appStore = useAppStore();
</script>
<template>
  <wings-card>
    <template #header>
      <div text-5>
        {{
          t('admin.workbench.welcome', {
            name: appStore.user.userInfo.nickname,
          })
        }}
      </div>
    </template>
  </wings-card>
</template>

<style lang="scss" scoped>
:deep(.ep-card) {
  border: 0 !important;
}
</style>
