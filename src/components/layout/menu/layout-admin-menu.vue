<script lang="ts" setup name="layout-admin-menu">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { useRouteStore } from '@/hooks/use-store/use-route-store';
import { SettingsValueEnum } from '@/constants/enums';

const route = useRoute();

const systemStore = useSystemStore();
const routeStore = useRouteStore();

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
  },
});

const height = computed(() => {
  let _height = '100vh';
  if (
    systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
    systemStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
  ) {
    _height =
      'calc(100vh - var(--wings-cloud-header-height) - var(--wings-cloud-collapse-height))';
  } else {
    _height =
      'calc(100vh - var(--wings-cloud-aside-logo-height) - var(--wings-cloud-collapse-height))';
  }
  if (systemStore.isMobile) {
    _height = 'calc(100vh - var(--wings-cloud-aside-logo-height)';
  }
  return 'height:' + _height + ';';
});

const width = computed(() => {
  let _width =
    'calc(100vw - var(--wings-cloud-header-toobar-width) - var(--wings-cloud-header-logo-width))';
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
        'wings-cloud-' + systemStore.settings.MenuStyle,
        'wings-cloud-' + systemStore.colorScheme,
        'wings-cloud-' + systemStore.settings.Layout,
        'wings-cloud-layout-admin-menu',
      ]"
      h-full
    >
      <el-menu
        router
        :mode="props.mode"
        collapse-transition
        :collapse="props.mode == 'vertical' ? systemStore.collapse : false"
        :unique-opened="systemStore.settings.UniqueOpened"
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
