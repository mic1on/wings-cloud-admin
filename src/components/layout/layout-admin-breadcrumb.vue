<script lang="ts" setup name="layout-admin-breadcrumb">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { SettingsValueEnum } from '@/constants/enums';

const systemStore = useSystemStore();

const route = useRoute();

const { t } = useI18n();
</script>

<template>
  <div
    flex
    items-center
    justify-start
    :style="
      systemStore.settings.Breadcrumb == SettingsValueEnum.BREADCRUMB_VIEW_TOP
        ? 'padding-bottom: var(--wings-main-padding)'
        : ''
    "
  >
    <el-breadcrumb>
      <el-breadcrumb-item
        v-for="(item, index) in route.meta.breadcrumb"
        :key="index"
      >
        {{ item.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
