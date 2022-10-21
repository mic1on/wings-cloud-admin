<script lang="ts" setup name="setting-layout">
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { baseStore } = useStore();

const props = defineProps({
  mode: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div mr-10>
    <div h-22 w-22 overflow-hidden cursor-pointer style="border-radius: 4px">
      <div w-full h-full v-if="props.mode === 'top'">
        <div
          w-full
          h-6
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid var(--wings-header-border-color);
          "
          :style="
            baseStore.themeSettings.colorScheme === 'dark'
              ? 'border-color:var(--el-border-color)'
              : 'border-color: var(--wings-header-border-color)'
          "
        ></div>
        <div flex h-16 w-full>
          <div
            h-full
            w-6
            style="
              box-sizing: border-box;
              background-color: var(--wings-menu-bg-color);
              border: 1px solid var(--el-border-color);
              border-top: 0;
            "
          ></div>
          <div
            h-full
            w-16
            style="
              box-sizing: border-box;
              background-color: var(--wings-main-fill);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-left: 0;
            "
          ></div>
        </div>
      </div>
      <div w-full h-full v-if="props.mode === 'top-lean'">
        <div
          w-full
          h-6
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid;
          "
          :style="
            baseStore.themeSettings.colorScheme === 'dark'
              ? 'border-color:var(--el-border-color)'
              : 'border-color: var(--wings-header-border-color)'
          "
        ></div>
        <div
          w-full
          h-16
          style="
            box-sizing: border-box;
            background-color: var(--wings-main-fill);
            border: 1px solid var(--el-border-color);
            border-top: 0;
          "
        ></div>
      </div>
      <div w-full h-full v-if="props.mode === 'blend'">
        <div
          w-full
          h-6
          style="
            box-sizing: border-box;
            background-color: var(--el-color-primary-light-5);
            border: 1px solid var(--el-color-primary-light-5);
          "
        ></div>
        <div flex h-16 w-full>
          <div
            h-full
            w-6
            style="
              box-sizing: border-box;
              background-color: var(--wings-menu-bg-color);
              border: 1px solid var(--el-border-color);
              border-top: 0;
            "
          ></div>
          <div
            h-full
            w-16
            style="
              box-sizing: border-box;
              background-color: var(--wings-main-fill);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-left: 0;
            "
          ></div>
        </div>
      </div>
      <div w-full h-full flex v-if="props.mode === 'aside'">
        <div
          h-full
          w-6
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid;
          "
          :style="
            baseStore.themeSettings.colorScheme === 'dark'
              ? 'border-color:var(--el-border-color)'
              : 'border-color: var(--wings-header-border-color)'
          "
        ></div>
        <div
          h-full
          w-16
          style="
            box-sizing: border-box;
            background-color: var(--wings-main-fill);
            border: 1px solid var(--el-border-color);
            border-left: 0;
          "
        ></div>
      </div>
    </div>
    <div text-2 text-center style="color: var(--el-text-color-regular)">
      <div v-if="props.active" flex items-center justify-center>
        <span
          w-2
          h-2
          mr-2
          style="background-color: var(--el-color-primary); border-radius: 50%"
        ></span>
        <span>{{ t('base.crud.selected') }}</span>
      </div>
      <div v-else>{{ props.name }}</div>
    </div>
  </div>
</template>
