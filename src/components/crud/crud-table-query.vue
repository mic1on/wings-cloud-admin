<script lang="ts" setup name="crud-card">
import type { ComponentInternalInstance } from 'vue';

const { slots } = getCurrentInstance() as ComponentInternalInstance;

const { t } = useI18n();

const props = defineProps({
  queryLabel: {
    type: String,
    default: '',
  },
  resetLabel: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <el-form v-bind="$attrs">
    <slot></slot>
    <el-form-item v-if="!slots.action">
      <el-button type="primary" @click="$attrs.onQuery">
        {{ props.queryLabel || t('crud.btn.query') }}
      </el-button>
      <el-button @click="$attrs.onReset">
        {{ props.resetLabel || t('crud.btn.reset') }}
      </el-button>
    </el-form-item>
    <slot name="action"></slot>
  </el-form>
</template>
<style lang="scss" scoped>
:deep(.el-form-item) {
  width: 200px;
  margin-right: 20px;
}
</style>
