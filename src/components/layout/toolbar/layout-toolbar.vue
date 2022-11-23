<script lang="ts" setup name="layout-toolbar">
import { SettingsValueEnum } from '@/constants/enums';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});

const systemStore = useSystemStore();

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
      systemStore.isMobile ? 'small' : 'normal',
      systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
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
      :class="systemStore.isMobile ? 'mobile' : 'pc'"
      :style="collapse ? 'width:0' : 'width:auto'"
    >
      <layout-toolbar-color-scheme
        class="toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Dark"
      ></layout-toolbar-color-scheme>
      <layout-toolbar-language
        only-icon
        class="toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Language"
      ></layout-toolbar-language>
      <layout-toolbar-refresh
        class="toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Refresh"
      ></layout-toolbar-refresh>
      <layout-toolbar-notification
        class="toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Notification"
      ></layout-toolbar-notification>
      <layout-toolbar-fullscreen
        class="toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Fullscreen && !systemStore.isMobile"
      ></layout-toolbar-fullscreen>
      <layout-toolbar-setting
        class="toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Setting"
      ></layout-toolbar-setting>
    </div>
    <layout-toolbar-avatar
      @click="changeToolbar"
      :color="iconColor()"
      :avatar-size="systemStore.isMobile ? 28 : 38"
      v-if="systemStore.settings.Toolbar.Avatar"
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
    background-color: var(--el-color-primary);
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
