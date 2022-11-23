<script lang="ts" setup name="layout-admin-breadcrumb">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();

const route = useRoute();

const { t } = useI18n();
</script>

<template>
  <div
    flex
    items-center
    justify-start
    :style="
      baseStore.settings.Breadcrumb == SettingsValueEnum.BREADCRUMB_VIEW_TOP
        ? 'padding-bottom: var(--wings-main-padding)'
        : ''
    "
    :class="
      baseStore.settings.Breadcrumb ===
      SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER
        ? 'p-l-6'
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
