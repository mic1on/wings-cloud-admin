<script lang="ts" setup>
import { SettingsValueEnum } from '@/constants/enums';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

defineOptions({
  name: 'LayoutToolbar',
});

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});

const systemStore = useSystemStore();

const iconColor = () => {
  return props.fixed ? '#fff' : 'var(--wings-cloud-header-text-color)';
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
    style="width: var(--wings-cloud-header-toobar-width)"
    :class="[
      props.fixed ? 'wings-cloud-fixed' : '',
      systemStore.isMobile ? 'wings-cloud-small' : 'wings-cloud-normal',
      systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
        ? 'wings-cloud-dark'
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
      :class="systemStore.isMobile ? 'wings-cloud-mobile' : 'wings-cloud-pc'"
      :style="collapse ? 'width:0' : 'width:auto'"
    >
      <layout-toolbar-color-scheme
        class="wings-cloud-toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Dark"
      ></layout-toolbar-color-scheme>
      <layout-toolbar-language
        only-icon
        class="wings-cloud-toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Language"
      ></layout-toolbar-language>
      <layout-toolbar-refresh
        class="wings-cloud-toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Refresh"
      ></layout-toolbar-refresh>
      <layout-toolbar-notification
        class="wings-cloud-toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Notification"
      ></layout-toolbar-notification>
      <layout-toolbar-fullscreen
        class="wings-cloud-toolbar"
        :color="iconColor()"
        v-if="systemStore.settings.Toolbar.Fullscreen && !systemStore.isMobile"
      ></layout-toolbar-fullscreen>
      <layout-toolbar-setting
        class="wings-cloud-toolbar"
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
.wings-cloud-mobile .wings-cloud-toolbar {
  margin-right: 1.4rem;
}

.wings-cloud-pc .wings-cloud-toolbar {
  margin-right: 2rem;
}

.wings-cloud-fixed {
  position: fixed;
  top: 20%;
  right: 0;
  width: auto !important;
  background-color: var(--el-color-primary);
  border-radius: 10px 0 0 10px;
  box-shadow: var(--el-box-shadow);
  transform: translateY(-50%);

  &.wings-cloud-dark {
    background-color: var(--el-color-primary);
  }

  &.wings-cloud-normal {
    height: 4rem;
    padding: 0.8rem;
  }

  &.wings-cloud-small {
    height: 2.8rem;
    padding: 0 0.8rem 0 0.4rem;
  }

  .wings-cloud-mobile,
  .wings-cloud-pc {
    overflow: hidden;
  }
}
</style>
