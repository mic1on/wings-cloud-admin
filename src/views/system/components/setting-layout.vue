<script lang="ts" setup name="setting-layout">
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { SettingsValueEnum } from '@/constants/enums';

const systemStore = useSystemStore();

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
  <div mr-7 mb-4 class="animation">
    <div h-18 w-18 overflow-hidden cursor-pointer>
      <div w-full h-full v-if="props.mode === SettingsValueEnum.LAYOUT_TOP">
        <div
          w-full
          flex
          items-center
          p-l-1
          h-4
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid var(--wings-header-border-color);
            border-radius: 4px 4px 0 0;
          "
          :style="
            systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
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
      <div
        w-full
        h-full
        v-if="props.mode === SettingsValueEnum.LAYOUT_TOP_LEAN"
      >
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
            systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
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
      <div
        w-full
        h-full
        flex
        v-if="props.mode === SettingsValueEnum.LAYOUT_ASIDE"
      >
        <div
          h-full
          w-6
          style="
            box-sizing: border-box;
            background-color: var(--wings-menu-bg-color);
            border: 1px solid var(--el-border-color);
            border-right: 0;
            border-radius: 4px 0 0 4px;
          "
        ></div>
        <div h-full w-14>
          <div
            w-full
            h-4
            style="
              box-sizing: border-box;
              background-color: var(--wings-header-bg-color);
              border: 1px solid;
              border-radius: 0 4px 0 0;
            "
            :style="
              systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
                ? 'border-color:var(--el-border-color)'
                : 'border-color: var(--wings-header-border-color)'
            "
          ></div>
          <div
            h-14
            w-full
            style="
              box-sizing: border-box;
              background-color: var(--wings-main-fill);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-radius: 0 0 4px;
            "
          ></div>
        </div>
      </div>
      <div
        w-full
        h-full
        flex
        v-if="props.mode === SettingsValueEnum.LAYOUT_ASIDE_DARK"
      >
        <div
          h-full
          w-6
          style="
            box-sizing: border-box;
            background-color: #262a3c;
            border: 1px solid;
            border-right: 0;
            border-radius: 4px 0 0 4px;
          "
          :style="
            systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
              ? 'border-color: var(--el-border-color)'
              : 'border-color: #262a3c'
          "
        ></div>
        <div h-full w-14>
          <div
            w-full
            h-4
            style="
              box-sizing: border-box;
              background-color: var(--wings-header-bg-color);
              border: 1px solid;
              border-radius: 0 4px 0 0;
            "
            :style="
              systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
                ? 'border-color:var(--el-border-color)'
                : 'border-color: var(--wings-header-border-color)'
            "
          ></div>
          <div
            h-14
            w-full
            style="
              box-sizing: border-box;
              background-color: var(--wings-main-fill);
              border: 1px solid var(--el-border-color);
              border-top: 0;
              border-radius: 0 0 4px;
            "
          ></div>
        </div>
      </div>
      <div
        w-full
        h-full
        flex
        v-if="props.mode === SettingsValueEnum.LAYOUT_ASIDE_LEAN"
      >
        <div
          h-full
          w-6
          style="
            box-sizing: border-box;
            background-color: var(--wings-menu-bg-color);
            border: 1px solid var(--el-border-color);
            border-radius: 4px 0 0 4px;
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
      <div
        w-full
        h-full
        flex
        v-if="props.mode === SettingsValueEnum.LAYOUT_ASIDE_LEAN_DARK"
      >
        <div
          h-full
          w-6
          style="
            box-sizing: border-box;
            background-color: #262a3c;
            border: 1px solid;
            border-radius: 4px 0 0 4px;
          "
          :style="
            systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
              ? 'border-color: var(--el-border-color)'
              : 'border-color: #262a3c'
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
<style lang="scss" scoped>
.animation > *div {
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}
</style>
