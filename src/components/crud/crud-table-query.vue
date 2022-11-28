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
  <div class="wings-cloud-crud-table-query">
    <el-form v-bind="$attrs" inline>
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
  </div>
</template>
<style lang="scss">
.wings-cloud-crud-table-query {
  .el-form-item {
    width: 200px !important;
    margin-right: 20px !important;

    &:last-child {
      width: auto !important;
      margin-right: 0 !important;
    }
  }
}
</style>
