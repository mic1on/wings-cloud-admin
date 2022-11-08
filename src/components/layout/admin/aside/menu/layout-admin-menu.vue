<script lang="ts" setup name="layout-admin-menu">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const route = useRoute();

const { baseStore, routeStore } = useStore();

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
  },
});

const height = computed(() => {
  let _height = '100vh';
  if (
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
  ) {
    _height =
      'calc(100vh - var(--wings-header-height) - var(--wings-collapse-height))';
  } else {
    _height =
      'calc(100vh - var(--wings-aside-logo-height) - var(--wings-collapse-height))';
  }
  if (baseStore.isMobile) {
    _height = 'calc(100vh - var(--wings-aside-logo-height)';
  }
  return 'height:' + _height + ';';
});

const width = computed(() => {
  let _width =
    'calc(100vw - var(--wings-header-toobar-width) - var(--wings-header-logo-width))';
  return 'width:' + _width + ';height:100%;';
});
</script>

<template>
  <el-scrollbar
    :wrap-style="props.mode == 'vertical' ? height : width"
    view-style="height:100%;"
  >
    <div
      :class="[
        baseStore.settings.MenuStyle,
        baseStore.settings.ColorScheme,
        baseStore.settings.Layout,
        'layout-admin-menu',
      ]"
      h-full
    >
      <el-menu
        router
        :mode="props.mode"
        collapse-transition
        :collapse="props.mode == 'vertical' ? baseStore.collapse : false"
        :unique-opened="baseStore.settings.UniqueOpened"
        :default-active="route.path"
        important="h-full border-none"
      >
        <layout-admin-menu-item
          :routes="routeStore.adminMenuRoutes"
        ></layout-admin-menu-item>
      </el-menu>
    </div>
  </el-scrollbar>
</template>
