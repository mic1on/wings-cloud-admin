<script lang="ts" setup>
import { stores } from '@/plugins/pinia';

const { t } = useI18n();

const appUserStore = stores['app-user'].default();
</script>

<template>
  <div mr-8 cursor-pointer v-if="appUserStore.isLogin">
    <el-popover :width="320" trigger="hover">
      <template #reference>
        <el-badge is-dot flex items-center>
          <el-icon :size="18"><Bell /></el-icon>
        </el-badge>
      </template>
      <template #default>
        <div flex justify-between items-center>
          <span text-4 style="color: var(--ep-text-color-regular)">
            {{ t('base.notifications') }}
          </span>
          <el-button text type="primary">{{ t('base.readAll') }}</el-button>
        </div>
        <div>
          <el-empty
            :image-size="100"
            :description="t('base.empty.notifications')"
          />
        </div>
      </template>
    </el-popover>
  </div>
</template>
