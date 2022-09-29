<script lang="ts" setup>
import useAppStore from '@/hooks/app-store';

const { t } = useI18n();

const appStore = useAppStore();
</script>
<template>
  <el-card shadow="never">
    <template #header>
      <div text-5>
        {{
          t('admin.workbench.welcome', {
            name: appStore.user.userInfo.nickname,
          })
        }}
      </div>
    </template>
  </el-card>
</template>
