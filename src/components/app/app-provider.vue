<script lang="ts" setup name="app-provider">
import { SettingsValueEnum } from '@/enums';
import { Settings } from '@/settings';
import { setEpThemeColor } from '@/utils/theme';
import { getMobileAreaCodes, getAndSaveDicts } from '@/hooks/use-common-data';
import { useStore } from '@/hooks/use-store';

const route = useRoute();

const { baseStore } = useStore();

const { t, messages } = useI18n();

const locale =
  messages.value[baseStore.language][Settings.ElementPlus.language];

// 监听默认配色方案变化
watch(
  () => baseStore.settings.ColorScheme,
  (newVal, oldVal) => {
    if (newVal === SettingsValueEnum.COLOR_SCHEME_AUTO) {
      baseStore.changeDarkOrLight(
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          baseStore.changeDarkOrLight(event.matches);
        });
    } else {
      document.documentElement.classList.remove(baseStore.colorScheme);
      document.documentElement.classList.add(newVal);
      baseStore.colorScheme = newVal;
    }
  },
  {
    immediate: true,
  }
);

// 监听默认主题颜色变化
watch(
  () => baseStore.settings.ThemeColor,
  (newVal, old) => {
    if (newVal && (newVal !== old || !old)) {
      setEpThemeColor(newVal as string);
    }
  },
  {
    immediate: true,
  }
);

// 监听浏览器标题
watch(
  () => baseStore.browserTitle,
  () => {
    if (baseStore.browserTitle) {
      document.title = `${baseStore.browserTitle} - ${
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

// 初始化多端适配
onBeforeMount(() => {
  baseStore.changeMobile();
  window.onresize = () => {
    baseStore.changeMobile();
  };
});

// 初始化数据
onBeforeMount(() => {
  getMobileAreaCodes();
  getAndSaveDicts();
});
</script>

<template>
  <el-config-provider
    :locale="locale"
    :button="baseStore.settings.ElementPlus.button"
    :message="baseStore.settings.ElementPlus.message"
    :size="baseStore.settings.ElementPlus.size"
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
      v-if="baseStore.loading"
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
