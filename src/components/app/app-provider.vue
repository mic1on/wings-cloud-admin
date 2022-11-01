<script lang="ts" setup name="app-provider">
import { DefaultSettings } from '@/settings';
import { useStore } from '@/hooks/use-store';
import { getMobileAreaCodes } from '@/hooks/use-common-data';
import { setEpThemeColor } from '@/utils/theme';

const route = useRoute();

const { baseStore } = useStore();

const { t, messages } = useI18n();

const locale =
  messages.value[baseStore.language][DefaultSettings.ElementPlus.language];

watch(
  () => baseStore.settings.ColorScheme,
  (newVal, oldVal) => {
    if (oldVal) {
      document.documentElement.classList.remove(oldVal);
    }
    if (newVal) {
      document.documentElement.classList.add(newVal);
    }
  },
  {
    immediate: true,
  }
);

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

watch(
  () => baseStore.browserTitle,
  () => {
    if (baseStore.browserTitle) {
      document.title = `${baseStore.browserTitle} - ${
        import.meta.env.APP_TITLE
      }`;
    } else {
      document.title = import.meta.env.APP_TITLE;
    }
  },
  {
    immediate: true,
  }
);

onBeforeMount(() => {
  getMobileAreaCodes();
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
      :element-loading-text="t('base.loading')"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-if="baseStore.loading"
    ></div>
    <template v-else>
      <layout-base
        v-if="route.meta?.layout === '' || route.meta?.layout === 'base'"
      >
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-base>
      <layout-website v-if="route.meta?.layout === 'website'">
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-website>
      <layout-admin v-if="route.meta?.layout === 'admin'">
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-admin>
    </template>
  </el-config-provider>
</template>
