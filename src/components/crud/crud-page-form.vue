<script lang="ts" setup name="crud-card">
import type { ComponentInternalInstance } from 'vue';

const { slots } = getCurrentInstance() as ComponentInternalInstance;

const { t } = useI18n();

const props = defineProps({
  action: {
    type: Boolean,
    default: false,
  },
  customAction: {
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

const emit = defineEmits(['submit', 'cancel']);

const submit = () => {
  emit('submit', null);
};

const cancel = () => {
  emit('cancel', null);
};
</script>
<template>
  <el-form v-bind="$attrs">
    <slot></slot>
    <el-form-item v-if="props.action && !slots.action">
      <el-button type="primary" @click="submit">
        {{ props.submitLabel || t('crud.btn.submit') }}
      </el-button>
      <el-button @click="cancel">
        {{ props.cancelLabel || t('crud.btn.cancel') }}
      </el-button>
    </el-form-item>
    <slot name="action"></slot>
  </el-form>
</template>

<style lang="scss" scoped>
:deep(.el-select) {
  width: 100%;
}
</style>
