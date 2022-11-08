<script lang="ts" setup name="layout-toolbar">
import { SettingsValueEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});

const { baseStore } = useStore();

const iconColor = () => {
  return props.fixed ? '#fff' : 'var(--wings-header-text-color)';
};

const collapse = ref<boolean>(true);

const changeToolbar = () => {
  if (!props.fixed) return;
  collapse.value = !collapse.value;
};
</script>

<template>
  <div
    h-full
    flex
    items-center
    justify-end
    p-x-6
    box-border
    style="width: var(--wings-header-toobar-width)"
    :class="[
      props.fixed ? 'fixed' : '',
      baseStore.isMobile ? 'small' : 'normal',
      baseStore.settings.ColorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
        ? 'dark'
        : '',
    ]"
  >
    <el-icon
      cursor-pointer
      v-if="props.fixed"
      @click="changeToolbar()"
      color="#fff"
      m-r-4
      :style="collapse ? 'transform:rotate(180deg)' : 'transform:rotate(0deg)'"
    >
      <ArrowRight />
    </el-icon>
    <div
      h-full
      flex
      items-center
      justify-end
      :class="baseStore.isMobile ? 'mobile' : 'pc'"
      :style="collapse ? 'width:0' : 'width:auto'"
    >
      <layout-toolbar-color-scheme
        class="toolbar"
        :color="iconColor()"
        v-if="baseStore.settings.Toolbar.Dark"
      ></layout-toolbar-color-scheme>
      <layout-toolbar-language
        only-icon
        class="toolbar"
        :color="iconColor()"
        v-if="baseStore.settings.Toolbar.Language"
      ></layout-toolbar-language>
      <layout-toolbar-refresh
        class="toolbar"
        :color="iconColor()"
        v-if="baseStore.settings.Toolbar.Refresh"
      ></layout-toolbar-refresh>
      <layout-toolbar-notification
        class="toolbar"
        :color="iconColor()"
        v-if="baseStore.settings.Toolbar.Notification"
      ></layout-toolbar-notification>
      <layout-toolbar-fullscreen
        class="toolbar"
        :color="iconColor()"
        v-if="baseStore.settings.Toolbar.Fullscreen && !baseStore.isMobile"
      ></layout-toolbar-fullscreen>
      <layout-toolbar-setting
        class="toolbar"
        :color="iconColor()"
        v-if="baseStore.settings.Toolbar.Setting"
      ></layout-toolbar-setting>
    </div>
    <layout-toolbar-avatar
      @click="changeToolbar"
      :color="iconColor()"
      :avatar-size="baseStore.isMobile ? 28 : 38"
      v-if="baseStore.settings.Toolbar.Avatar"
    ></layout-toolbar-avatar>
  </div>
</template>

<style lang="scss" scoped>
.mobile .toolbar {
  margin-right: 1.4rem;
}

.pc .toolbar {
  margin-right: 2rem;
}

.fixed {
  position: fixed;
  top: 20%;
  right: 0;
  width: auto !important;
  background-color: var(--el-color-primary);
  border-radius: 10px 0 0 10px;
  box-shadow: var(--el-box-shadow);
  transform: translateY(-50%);

  &.dark {
    background-color: var(--el-color-primary-light-3);
  }

  &.normal {
    height: 4rem;
    padding: 0.8rem;
  }

  &.small {
    height: 2.8rem;
    padding: 0 0.8rem 0 0.4rem;
  }

  .mobile,
  .pc {
    overflow: hidden;
  }
}
</style>
