<script lang="ts" setup name="layout-action-color-scheme">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();

const changeColorScheme = () => {
  baseStore.settings.ColorScheme =
    baseStore.settings.ColorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
      ? SettingsValueEnum.COLOR_SCHEME_LIGHT
      : SettingsValueEnum.COLOR_SCHEME_DARK;
};

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});
</script>

<template>
  <i
    cursor-pointer
    @click="changeColorScheme()"
    :style="{ color: props.color }"
    text-4
    inline-flex
    i="dark:ep-moon ep-sunny"
  />
</template>
