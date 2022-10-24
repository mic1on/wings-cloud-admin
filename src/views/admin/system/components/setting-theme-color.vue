<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';
import { PredefineThemeColors } from '@/settings';

const { t } = useI18n();

const { baseStore } = useStore();

const emit = defineEmits(['change']);

const changeThemeColor = (val: string | null): void => {
  if (!val) return;
  emit('change', val as string);
};
</script>

<template>
  <div flex flex-wrap>
    <div
      mr-6
      cursor-pointer
      v-for="(item, index) in PredefineThemeColors"
      :key="index"
      @click="changeThemeColor(item)"
    >
      <div
        style="
          box-sizing: border-box;
          width: 2.5rem;
          height: 2.5rem;
          padding: 4px;
          border: 1px solid var(--el-border-color);
          border-radius: 4px;
        "
      >
        <div
          w-full
          h-full
          :style="{
            backgroundColor: item,
          }"
        ></div>
      </div>
      <div w-full h-2 flex items-center justify-center p-y-2>
        <div
          v-if="item == baseStore.themeSettings.themeColor"
          w-2
          h-2
          style="background-color: var(--el-color-primary); border-radius: 50%"
        ></div>
      </div>
    </div>
    <div w-8>
      <div flex items-center justify-center>
        <el-color-picker
          size="large"
          v-model="baseStore.themeSettings.themeColor"
          @change="changeThemeColor"
          :predefine="PredefineThemeColors"
        />
      </div>
      <div w-full h-2 flex items-center justify-center p-y-2>
        <div
          v-if="
            PredefineThemeColors.filter(
              (item) => item == baseStore.themeSettings.themeColor
            ).length == 0
          "
          w-2
          h-2
          style="background-color: var(--el-color-primary); border-radius: 50%"
        ></div>
      </div>
    </div>
  </div>
</template>
