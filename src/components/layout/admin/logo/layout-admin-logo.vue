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
    baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP &&
    baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP_LEAN
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
    baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP &&
    baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_TOP_LEAN
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
    class="layout-admin-logo"
    cursor-pointer
    p-x-6
    box-border
    @click="goHomeRoute()"
    :style="[width, position]"
  >
    <div class="logo" flex items-center justify-center>
      <img
        v-if="
          (baseStore.settings.ColorScheme ===
            SettingsValueEnum.COLOR_SCHEME_THEME &&
            baseStore.settings.Layout !== SettingsValueEnum.LAYOUT_ASIDE &&
            baseStore.settings.Layout !==
              SettingsValueEnum.LAYOUT_ASIDE_LEAN) ||
          (baseStore.settings.ColorScheme !==
            SettingsValueEnum.COLOR_SCHEME_THEME &&
            (baseStore.settings.Layout ===
              SettingsValueEnum.LAYOUT_ASIDE_DARK ||
              baseStore.settings.Layout ===
                SettingsValueEnum.LAYOUT_ASIDE_LEAN_DARK))
        "
        w-10
        h-10
        src="@/assets/logo-white.svg"
      />
      <img v-else w-10 h-10 src="@/assets/logo.svg" />
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
      class="single-line-omitted name"
      :style="
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_DARK ||
        baseStore.settings.Layout === SettingsValueEnum.LAYOUT_ASIDE_LEAN
          ? 'color: var(--wings-menu-text-color)'
          : 'color: var(--wings-header-text-color)'
      "
    >
      {{ t('app.name') }}
    </div>
  </div>
</template>
