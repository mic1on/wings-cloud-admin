<script lang="ts" setup name="layout-admin-logo">
import { DefaultSettings } from '@/settings';
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { t } = useI18n();

const router = useRouter();

const { baseStore } = useStore();

const goHomeRoute = () => {
  router.push({ path: DefaultSettings.AdminFirstRoute });
};

const width = computed(() => {
  let _width = 'var(--wings-header-logo-width)';
  if (
    baseStore.collapse &&
    (baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
      baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN)
  ) {
    _width = 'var(--wings-aside-width-fold)';
  } else {
    _width = 'var(--wings-aside-width)';
  }
  if (
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
  ) {
    _width = 'var(--wings-header-logo-width)';
  }
  return 'width:' + _width + ';';
});

const position = computed(() => {
  let _position = 'display:flex;align-items:center;';
  if (
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN
  ) {
    _position += 'justify-content:center;';
  } else if (
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
    baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
  ) {
    _position += 'justify-content:flex-start;';
  }
  return _position;
});
</script>

<template>
  <div
    cursor-pointer
    p-x-6
    box-border
    @click="goHomeRoute()"
    :style="[width, position]"
  >
    <div class="logo" flex items-center justify-center>
      <img w-10 h-10 src="@/assets/svgs/logo.svg" alt="" />
    </div>
    <div
      text-6
      font-600
      text-center
      ml-4
      v-if="
        !baseStore.collapse ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN
      "
      class="single-line-omitted"
      :style="
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN
          ? 'color: var(--wings-menu-text-color)'
          : 'color: var(--wings-header-text-color)'
      "
    >
      {{ t('base.appName') }}
    </div>
  </div>
</template>
