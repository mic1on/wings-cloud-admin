<script lang="ts" setup name="layout-action-color-scheme">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { SettingsValueEnum } from '@/constants/enums';

const systemStore = useSystemStore();

const changeColorScheme = () => {
  if (
    systemStore.settings.ColorScheme === SettingsValueEnum.COLOR_SCHEME_AUTO
  ) {
    systemStore.changeDarkOrLight(
      systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_LIGHT
    );
  } else {
    systemStore.settings.ColorScheme =
      systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
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
      v-if="systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK"
    />
    <Sunny v-else />
  </el-icon>
</template>
