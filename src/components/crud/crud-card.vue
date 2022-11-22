<script lang="ts" setup name="crud-card">
import type { ComponentInternalInstance } from 'vue';

const { slots } = getCurrentInstance() as ComponentInternalInstance;

const { t } = useI18n();

const props = defineProps({
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
  submitLabel: {
    type: String,
    default: '',
  },
  cancelLabel: {
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
  <el-card shadow="never" important="border-none">
    <template #header>
      <slot name="header"></slot>
      <template v-if="!slots.header">
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
    </template>
    <div class="padding">
      <slot></slot>
    </div>
    <template v-if="action">
      <el-divider important="m-0"></el-divider>
      <div class="padding">
        <slot name="action"></slot>
        <template v-if="!slots.action">
          <el-button type="primary" @click="submit">
            {{ props.submitLabel || t('crud.btn.submit') }}
          </el-button>
          <el-button @click="cancel">
            {{ props.cancelLabel || t('crud.btn.cancel') }}
          </el-button>
        </template>
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

.padding {
  padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding);
}
</style>
