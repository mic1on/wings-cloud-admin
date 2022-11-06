<script lang="ts" setup name="layout-admin-header">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();
</script>
<template>
  <div h-full flex items-center justify-between box-border>
    <div h-full flex items-center>
      <layout-toolbar-mobile-menu v-if="baseStore.isMobile">
      </layout-toolbar-mobile-menu>
      <layout-admin-logo
        v-if="
          !baseStore.isMobile &&
          (baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
            baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN)
        "
      ></layout-admin-logo>
      <layout-admin-menu
        mode="horizontal"
        v-if="
          !baseStore.isMobile &&
          baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
        "
      ></layout-admin-menu>
      <layout-admin-breadcrumb
        v-if="
          !baseStore.isMobile &&
          baseStore.settings.Breadcrumb ===
            SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER
        "
      ></layout-admin-breadcrumb>
    </div>
    <div
      h-full
      flex
      items-center
      justify-end
      p-x-6
      style="box-sizing: border-box; width: var(--wings-header-toobar-width)"
      :class="[baseStore.isMobile ? 'mobile' : 'pc']"
    >
      <layout-toolbar-color-scheme
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Dark"
      ></layout-toolbar-color-scheme>
      <layout-toolbar-language
        only-icon
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Language"
      ></layout-toolbar-language>
      <layout-toolbar-refresh
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Refresh"
      ></layout-toolbar-refresh>
      <layout-toolbar-notification
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Notification"
      ></layout-toolbar-notification>
      <layout-toolbar-fullscreen
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Fullscreen && !baseStore.isMobile"
      ></layout-toolbar-fullscreen>
      <layout-toolbar-setting
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Setting"
      ></layout-toolbar-setting>
      <layout-toolbar-avatar
        class="toolbar"
        v-if="baseStore.settings.Toolbar.Avatar"
      ></layout-toolbar-avatar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile .toolbar {
  margin-left: 1.4rem;
}

.pc .toolbar {
  margin-left: 2rem;
}
</style>
