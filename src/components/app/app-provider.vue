<script lang="ts" setup name="app-provider">
import { Settings } from '@/constants/settings';
import { SettingsValueEnum } from '@/constants/enums';
import { setEpThemeColor } from '@/utils/theme';
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { useMobileCodes } from '@/hooks/use-crud/use-mobile-codes';
import { useDict } from '@/hooks/use-crud/use-dict';

const route = useRoute();

const systemStore = useSystemStore();

const { getMobileCodes } = useMobileCodes();
const { getDictAll } = useDict();

const { t, messages } = useI18n();

const locale =
  messages.value[systemStore.language][Settings.ElementPlus.language];

watch(
  () => systemStore.settings.ColorScheme,
  (newVal, oldVal) => {
    if (newVal === SettingsValueEnum.COLOR_SCHEME_AUTO) {
      systemStore.changeDarkOrLight(
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          systemStore.changeDarkOrLight(event.matches);
        });
    } else {
      document.documentElement.classList.remove(systemStore.colorScheme);
      document.documentElement.classList.add(newVal);
      systemStore.colorScheme = newVal;
    }
  },
  {
    immediate: true,
  }
);

watch(
  () => systemStore.settings.ThemeColor,
  (newVal, old) => {
    if (newVal && (newVal !== old || !old)) {
      setEpThemeColor(newVal as string);
    }
  },
  {
    immediate: true,
  }
);

watch(
  () => systemStore.browserTitle,
  () => {
    if (systemStore.browserTitle) {
      document.title = `${systemStore.browserTitle} - ${
        import.meta.env.APP_TITLE || t('app.name')
      }`;
    } else {
      document.title = import.meta.env.APP_TITLE || t('app.name');
    }
  },
  {
    immediate: true,
  }
);

onBeforeMount(() => {
  systemStore.changeMobile();
  window.onresize = () => {
    systemStore.changeMobile();
  };
});

onBeforeMount(() => {
  getMobileCodes();
  getDictAll();
});
</script>

<template>
  <el-config-provider
    :locale="locale"
    :button="systemStore.settings.ElementPlus.button"
    :message="systemStore.settings.ElementPlus.message"
    :size="systemStore.settings.ElementPlus.size"
  >
    <div
      class="global-loading"
      v-loading="true"
      absolute
      top-0
      left-0
      z-9999
      w-screen
      h-screen
      :element-loading-fullscreen="true"
      :element-loading-lock="true"
      :element-loading-text="t('app.loading')"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-if="systemStore.loading"
    ></div>
    <template v-else>
      <layout-page
        v-if="
          !route.meta.layout ||
          route.meta?.layout === '' ||
          route.meta?.layout === 'page'
        "
      >
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-page>
      <layout-admin v-if="route.meta?.layout === 'admin'">
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-admin>
    </template>
  </el-config-provider>
</template>
