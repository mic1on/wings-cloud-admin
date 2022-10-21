<script lang="ts" setup name="setting-layout">
const { t } = useI18n();

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
  <div mr-8>
    <div h-16 w-16 rd-1 overflow-hidden cursor-pointer>
      <div w-full h-full v-if="props.mode === 'top'">
        <div
          w-full
          h-5
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid var(--wings-header-border-color);
          "
        ></div>
        <div
          w-full
          h-11
          style="
            box-sizing: border-box;
            background-color: var(--wings-main-fill);
            border: 1px solid var(--el-border-color);
            border-top: 0;
          "
        ></div>
      </div>
      <div w-full h-full flex v-if="props.mode === 'aside'">
        <div
          h-full
          w-5
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid var(--wings-header-border-color);
          "
        ></div>
        <div
          h-full
          w-11
          style="
            box-sizing: border-box;
            background-color: var(--wings-main-fill);
            border: 1px solid var(--el-border-color);
            border-left: 0;
          "
        ></div>
      </div>
      <div w-full h-full v-if="props.mode === 'blend'">
        <div
          w-full
          h-5
          style="
            box-sizing: border-box;
            background-color: var(--el-color-primary-light-5);
            border: 1px solid var(--el-color-primary-light-5);
          "
        ></div>
        <div flex h-11 w-full>
          <div
            h-full
            w-5
            style="
              box-sizing: border-box;
              background-color: var(--wings-menu-bg-color);
              border: 1px solid var(--el-border-color);
              border-top: 0;
            "
          ></div>
          <div
            h-full
            w-11
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
      <div w-full h-full v-if="props.mode === 'default'">
        <div
          w-full
          h-5
          style="
            box-sizing: border-box;
            background-color: var(--wings-header-bg-color);
            border: 1px solid var(--wings-header-border-color);
          "
        ></div>
        <div flex h-11 w-full>
          <div
            h-full
            w-5
            style="
              box-sizing: border-box;
              background-color: var(--wings-menu-bg-color);
              border: 1px solid var(--el-border-color);
              border-top: 0;
            "
          ></div>
          <div
            h-full
            w-11
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
    </div>
    <div text-2 text-center style="color: var(--el-text-color-regular)">
      {{ props.active ? t('base.crud.selected') : props.name }}
    </div>
  </div>
</template>
