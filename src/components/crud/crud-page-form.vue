<script lang="ts" setup name="crud-card">
const { t } = useI18n();

const props = defineProps({
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
    <div v-if="props.action">
      <slot name="action"></slot>
    </div>
    <el-form-item v-else>
      <el-button type="primary" @click="submit">
        {{ props.submitLabel || t('crud.btn.submit') }}
      </el-button>
      <el-button @click="cancel">
        {{ props.cancelLabel || t('crud.btn.cancel') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>
