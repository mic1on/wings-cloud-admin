<script lang="ts" setup name="layout-admin">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();
</script>

<template>
  <div
    :class="[baseStore.colorScheme, baseStore.settings.Layout, 'layout-admin']"
  >
    <el-container>
      <el-header
        :style="
          baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
          baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
            ? 'height: var(--wings-header-height); border-bottom: 1px solid'
            : 'height: 0; border-bottom: none;'
        "
      >
        <layout-admin-header
          v-if="
            baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
            baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
          "
        ></layout-admin-header>
      </el-header>
      <el-container>
        <el-aside
          :style="[
            !baseStore.isMobile &&
            baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP_LEAN
              ? baseStore.collapse
                ? 'width: var(--wings-aside-width-fold)'
                : 'width: var(--wings-aside-width)'
              : 'width: 0',
            baseStore.isMobile ? 'border:none' : '',
          ]"
        >
          <layout-admin-aside
            v-if="
              !baseStore.isMobile &&
              baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP_LEAN
            "
          ></layout-admin-aside>
        </el-aside>
        <el-main
          :style="
            baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
            baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
              ? 'height: calc(100vh - var(--wings-header-height));'
              : 'height: calc(100vh);'
          "
        >
          <el-header
            :style="
              baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
              baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_DARK
                ? 'height: var(--wings-header-height); border-bottom: 1px solid'
                : 'height: 0; border-bottom: none'
            "
          >
            <layout-admin-header
              v-if="
                baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
                baseStore.settings.Layout ===
                  SettingsValueEnum.LAYOUT_ASIDE_DARK
              "
            ></layout-admin-header>
          </el-header>
          <layout-admin-tab v-if="baseStore.settings.Tab"></layout-admin-tab>
          <layout-admin-main>
            <template #main-router-view>
              <slot name="router-view"></slot>
            </template>
          </layout-admin-main>
          <el-footer v-if="baseStore.settings.Footer">
            <layout-admin-footer></layout-admin-footer>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
    <layout-toolbar-mobile-menu
      v-if="
        baseStore.isMobile &&
        (baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN ||
          baseStore.settings.Layout ===
            SettingsValueEnum.LAYOUT_ASIDE_LEAN_DARK)
      "
      :fixed="true"
    ></layout-toolbar-mobile-menu>
    <el-drawer
      v-model="baseStore.mobileMenu"
      :show-close="false"
      direction="ltr"
      :with-header="false"
      size="var(--wings-aside-width)"
    >
      <layout-admin-aside></layout-admin-aside>
    </el-drawer>
    <layout-toolbar
      v-if="
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN_DARK
      "
      :fixed="true"
    ></layout-toolbar>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-header) {
  box-sizing: border-box;
  padding: 0 !important;
  overflow: hidden;
  background-color: var(--wings-header-bg-color);
  border-color: var(--wings-header-border-color) !important;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-container) {
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--wings-menu-bg-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-aside) {
  box-sizing: border-box;
  overflow: hidden;
  border-right: 1px solid var(--wings-aside-border-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-main) {
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  background: var(--wings-main-fill);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}
</style>
