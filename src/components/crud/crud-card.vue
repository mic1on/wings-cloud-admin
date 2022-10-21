<script lang="ts" setup>
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
  actionSubmitLabel: {
    type: String,
    default: '',
  },
  actionCancelLabel: {
    type: String,
    default: '',
  },
});

const submit = () => {};

const cancel = () => {};
</script>
<template>
  <el-card :shadow="props.shadow" important="border-none transition-duration-0">
    <template #header v-if="props.title || props.subTitle">
      <div text-6 style="color: var(--el-text-color-primary)">
        {{ props.title }}
      </div>
      <div
        v-if="props.subTitle"
        text-4
        mt-2
        style="color: var(--el-text-color-regular)"
      >
        {{ props.subTitle }}
      </div>
    </template>
    <slot name="header" v-if="!props.title || !props.subTitle"></slot>
    <div
      style="padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding)"
    >
      <slot></slot>
    </div>
    <el-divider important="m-0"></el-divider>
    <div
      v-if="action"
      style="padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding)"
    >
      <el-button type="primary" @click="submit">
        {{ props.actionSubmitLabel || t('base.crud.submit') }}
      </el-button>
      <el-button @click="cancel">
        {{ props.actionCancelLabel || t('base.crud.cancel') }}
      </el-button>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  border: 0 !important;
}

:deep(.el-card__body) {
  padding: 0 !important;
}
</style>
