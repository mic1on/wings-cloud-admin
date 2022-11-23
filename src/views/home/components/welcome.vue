<script lang="ts" setup>
import { useUserStore } from '@/hooks/use-store/use-user-store';

const { t } = useI18n();

const userStore = useUserStore();
</script>
<template>
  <crud-card>
    <template #content>
      <div text-5>
        <span p-r-4>{{ t('admin.home.workbench.welcome') }}</span>
        <span>{{ userStore.userProfile.nickname }}</span>
      </div>
      <el-divider
        style="border-top: 1px solid var(--el-border-color-lighter)"
      />
      <el-row :gutter="20">
        <el-col :span="6"> </el-col>
        <el-col :span="6"> </el-col>
        <el-col :span="6"> </el-col>
        <el-col :span="6"> </el-col>
      </el-row>
    </template>
  </crud-card>
</template>
