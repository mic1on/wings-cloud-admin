<script lang="ts" setup name="crud-card">
const { t } = useI18n();

const props = defineProps({
  shadow: {
    type: String,
    default: 'never',
  },
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  action: {
    type: Boolean,
    default: false,
  },
  customHeader: {
    type: Boolean,
    default: false,
  },
  customAction: {
    type: Boolean,
    default: false,
  },
  actionSubmitLabel: {
    type: String,
    default: '',
  },
  actionCancelLabel: {
    type: String,
    default: '',
  },
});

const route = useRoute();

const emit = defineEmits(['submit', 'cancel']);

const submit = () => {
  emit('submit', null);
};

const cancel = () => {
  emit('cancel', null);
};
</script>
<template>
  <el-card :shadow="props.shadow" important="border-none">
    <template #header v-if="!props.customHeader">
      <div
        text-5
        style="color: var(--el-text-color-primary)"
        v-if="props.title || route.meta.menuName"
      >
        {{ props.title || route.meta.menuName }}
      </div>
      <div
        text-4
        mt-2
        v-if="props.subTitle || route.meta.menuDescription"
        style="color: var(--el-text-color-secondary)"
      >
        {{ props.subTitle || route.meta.menuDescription }}
      </div>
    </template>
    <slot v-if="props.customHeader" name="header"></slot>
    <div
      style="padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding)"
    >
      <slot></slot>
    </div>
    <template v-if="action">
      <el-divider important="m-0"></el-divider>
      <div
        style="
          padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding);
        "
      >
        <div v-if="!customAction">
          <el-button type="primary" @click="submit">
            {{ props.actionSubmitLabel || t('crud.btn.submit') }}
          </el-button>
          <el-button @click="cancel">
            {{ props.actionCancelLabel || t('crud.btn.cancel') }}
          </el-button>
        </div>
        <slot v-else name="action"></slot>
      </div>
    </template>
  </el-card>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  border: 0 !important;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-card__body) {
  padding: 0 !important;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}
</style>
