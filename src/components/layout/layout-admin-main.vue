<script lang="ts" setup name="layout-admin-main">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { SettingsValueEnum } from '@/constants/enums';

const systemStore = useSystemStore();

const height = computed(() => {
  let _height = '100vh';
  if (
    systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
    systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN ||
    systemStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
    systemStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_DARK
  ) {
    _height =
      'calc(100vh - var(--wings-cloud-header-height) - var(--wings-cloud-tab-height))';
  } else {
    _height = 'calc(100vh - var(--wings-cloud-tab-height))';
  }
  if (!systemStore.settings.Tab) {
    _height = `calc(${_height} + var(--wings-cloud-tab-height))`;
  }
  return 'height: ' + _height;
});
</script>

<template>
  <el-scrollbar
    :wrap-style="[height, { 'box-sizing': 'border-box' }]"
    view-style="
        height: 100%;
				box-sizing: border-box;
        transition: all var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier);"
  >
    <div
      style="
        box-sizing: border-box;
        height: 100%;
        padding: var(--wings-cloud-main-padding);
        background: var(--wings-cloud-main-fill);
        transition: all var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier);
      "
    >
      <layout-admin-breadcrumb
        v-if="
          systemStore.settings.Breadcrumb ===
          SettingsValueEnum.BREADCRUMB_VIEW_TOP
        "
      ></layout-admin-breadcrumb>
      <div style="padding-bottom: var(--wings-cloud-main-padding)">
        <slot name="main-router-view"></slot>
      </div>
      <layout-admin-copyright
        v-if="
          systemStore.settings.Copyright ===
          SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM
        "
      >
      </layout-admin-copyright>
    </div>
  </el-scrollbar>
</template>
