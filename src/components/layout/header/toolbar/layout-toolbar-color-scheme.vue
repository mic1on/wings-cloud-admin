<script lang="ts" setup name="layout-action-color-scheme">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/constants/enums';

const { baseStore } = useStore();

const changeColorScheme = () => {
  if (baseStore.settings.ColorScheme === SettingsValueEnum.COLOR_SCHEME_AUTO) {
    baseStore.changeDarkOrLight(
      baseStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_LIGHT
    );
  } else {
    baseStore.settings.ColorScheme =
      baseStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
        ? SettingsValueEnum.COLOR_SCHEME_LIGHT
        : SettingsValueEnum.COLOR_SCHEME_DARK;
  }
};

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});
</script>

<template>
  <el-icon
    cursor-pointer
    @click="changeColorScheme()"
    :style="{ color: props.color }"
    size="1.2rem"
    inline-flex
  >
    <Moon
      v-if="baseStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK"
    />
    <Sunny v-else />
  </el-icon>
</template>
