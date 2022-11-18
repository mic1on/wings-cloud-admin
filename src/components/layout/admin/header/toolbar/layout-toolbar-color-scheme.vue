<script lang="ts" setup name="layout-action-color-scheme">
import { useStore } from '@/hooks/use-store';
import { SettingsValueEnum } from '@/enums';

const { baseStore } = useStore();

const changeColorScheme = () => {
  baseStore.settings.ColorScheme =
    baseStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
      ? SettingsValueEnum.COLOR_SCHEME_LIGHT
      : SettingsValueEnum.COLOR_SCHEME_DARK;
};

const isDark = computed(() => {
  return baseStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK;
});

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
    <Moon v-if="isDark" />
    <Sunny v-else />
  </el-icon>
</template>
