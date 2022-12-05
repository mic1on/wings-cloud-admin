<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue';
import { useUserStore } from '@/hooks/use-store/use-user-store';

const { t } = useI18n();

const userStore = useUserStore();
</script>
<template>
  <crud-card :header="false">
    <div flex items-center>
      <el-avatar
        :src="userStore.userProfile.avatar"
        :icon="UserFilled"
        :size="64"
        mr-4
      ></el-avatar>
      <div>
        <div text-5 mb-2>
          <span>{{ t('home.workbench.welcome') }}</span>
          <span>{{ userStore.userProfile.nickname }}</span>
        </div>
        <div
          flex
          items-center
          style="color: var(--el-text-color-secondary); font-size: 0.92rem"
        >
          <span pr-4>
            {{ t('home.workbench.role') }}
            {{ userStore.userProfile.roleName }}
          </span>
          <span>
            {{ t('home.workbench.department') }}
            {{ userStore.userProfile.departmentName }}
          </span>
        </div>
      </div>
    </div>
  </crud-card>
</template>
