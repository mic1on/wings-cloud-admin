<script lang="ts" setup name="layout-admin-main">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();

const height = computed(() => {
  let _height = '100vh';
  if (
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN ||
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE
  ) {
    _height =
      'calc(100vh - var(--wings-header-height) - var(--wings-tab-height))';
  } else {
    _height = 'calc(100vh - var(--wings-tab-height))';
  }
  if (!baseStore.settings.Tab) {
    _height = `calc(${_height} + var(--wings-tab-height))`;
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
        padding: var(--wings-main-padding);
        background: var(--wings-main-fill);
        transition: all var(--el-transition-duration)
          var(--el-transition-function-ease-in-out-bezier);
      "
    >
      <layout-admin-breadcrumb
        v-if="
          baseStore.settings.Breadcrumb ===
          SettingsValueEnum.BREADCRUMB_VIEW_TOP
        "
      ></layout-admin-breadcrumb>
      <div style="padding-bottom: var(--wings-main-padding)">
        <slot name="main-router-view"></slot>
      </div>
      <layout-admin-copyright
        v-if="
          baseStore.settings.Copyright ===
          SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM
        "
      >
      </layout-admin-copyright>
    </div>
  </el-scrollbar>
</template>
