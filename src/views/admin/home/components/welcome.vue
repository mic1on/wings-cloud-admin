<script lang="ts" setup>
import useAppStore from '@/hooks/app-store';

const { t } = useI18n();

const appStore = useAppStore();
</script>
<template>
  <wings-card>
    <template #content>
      <div text-5>
        <span p-r-4>{{ t('admin.workbench.welcome') }}</span>
        <span>{{ appStore.user.userInfo.nickname }}</span>
      </div>
      <el-divider
        style="border-top: 1px solid var(--ep-border-color-lighter)"
      />
      <el-row :gutter="20">
        <el-col :span="6"> </el-col>
        <el-col :span="6"> </el-col>
        <el-col :span="6"> </el-col>
        <el-col :span="6"> </el-col>
      </el-row>
    </template>
  </wings-card>
</template>
