<script lang="ts" setup name="setting-layout">
import { useStore } from '@/hooks/use-store';

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
    <div h-18 w-18 overflow-hidden cursor-pointer>
      <div w-full h-full v-if="props.mode === 'top'">
        <div
          w-full
          h-4
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid var(--wings-header-border-color);
            border-radius: 4px 4px 0 0;
          "
          :style="
            baseStore.themeSettings.colorScheme === 'dark'
              ? 'border-color:var(--el-border-color)'
              : 'border-color: var(--wings-header-border-color)'
          "
        >
        </div>
        <div flex h-14 w-full>
          <div
            h-full
            w-6
            style="
              box-sizing: border-box;
              background-color: var(--wings-menu-bg-color);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-radius: 0 0 0 4px;
            "
          >
          </div>
          <div
            h-full
            w-14
            style="
              box-sizing: border-box;
              background-color: var(--wings-main-fill);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-left: 0;
              border-radius: 0 0 4px;
            "
          ></div>
        </div>
      </div>
      <div w-full h-full v-if="props.mode === 'top-lean'">
        <div
          w-full
          h-4
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid;
            border-radius: 4px 4px 0 0;
          "
          :style="
            baseStore.themeSettings.colorScheme === 'dark'
              ? 'border-color:var(--el-border-color)'
              : 'border-color: var(--wings-header-border-color)'
          "
        >
        </div>
        <div
          w-full
          h-14
          style="
            box-sizing: border-box;
            background-color: var(--wings-main-fill);
            border: 1px solid var(--el-border-color);
            border-top: 0;
            border-radius: 0 0 4px 4px;
          "
        ></div>
      </div>
      <div w-full h-full v-if="props.mode === 'blend'">
        <div
          w-full
          h-4
          style="
            box-sizing: border-box;
            background-color: var(--el-color-primary-light-5);
            border: 1px solid var(--el-color-primary-light-5);
            border-radius: 4px 4px 0 0;
          "
        ></div>
        <div flex h-14 w-full>
          <div
            h-full
            w-6
            style="
              box-sizing: border-box;
              background-color: var(--wings-menu-bg-color);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-radius: 0 0 0 4px;
            "
          ></div>
          <div
            h-full
            w-12
            style="
              box-sizing: border-box;
              background-color: var(--wings-main-fill);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-left: 0;
              border-radius: 0 0 4px;
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
            border-radius: 4px 0 0 4px;
          "
          :style="
            baseStore.themeSettings.colorScheme === 'dark'
              ? 'border-color:var(--el-border-color)'
              : 'border-color: var(--wings-header-border-color)'
          "
        ></div>
        <div
          h-full
          w-12
          style="
            box-sizing: border-box;
            background-color: var(--wings-main-fill);
            border: 1px solid var(--el-border-color);
            border-left: 0;
            border-radius: 0 4px 4px 0;
          "
        ></div>
      </div>
    </div>
    <div w-full h-2 flex items-center justify-center p-y-2>
      <div
        v-if="active"
        w-2
        h-2
        style="background-color: var(--el-color-primary); border-radius: 50%"
      ></div>
    </div>
  </div>
</template>
