<script lang="ts" setup name="crud-table">
const { t } = useI18n();

const props = defineProps({
  customQuery: {
    type: Boolean,
    default: false,
  },
  queryLabel: {
    type: String,
    default: '',
  },
  resetLabel: {
    type: String,
    default: '',
  },
  queryFormInline: {
    type: Boolean,
    default: true,
  },
  queryFormLabelWidth: {
    type: String,
    default: '',
  },
  queryFormLabelPosition: {
    type: String,
    default: 'left',
  },
  customAction: {
    type: Boolean,
    default: false,
  },
  customTable: {
    type: Boolean,
    default: false,
  },
  customPagination: {
    type: Boolean,
    default: false,
  },
  tableData: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const query = () => {};

const reset = () => {};
</script>
<template>
  <div class="crud-query">
    <slot v-if="props.customQuery" name="query"></slot>
    <el-form
      v-else
      :inline="queryFormInline"
      :label-width="props.queryFormLabelWidth"
      :label-position="props.queryFormLabelPosition"
    >
      <slot name="query"></slot>
      <el-form-item>
        <el-button type="primary" @click="query">
          {{ queryLabel || t('crud.btn.query') }}
        </el-button>
        <el-button @click="reset">
          {{ resetLabel || t('crud.btn.reset') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="crud-action">
    <slot name="action" v-if="props.customAction"></slot>
    <div v-else></div>
  </div>
  <div class="crud-table">
    <slot name="table" v-if="props.customTable"></slot>
    <div v-else>
      <el-table :data="tableData" style="width: 100%">
        <slot name="table"></slot>
      </el-table>
    </div>
  </div>
  <div class="crud-pagination">
    <slot name="pagination" v-if="props.customPagination"></slot>
    <div v-else></div>
  </div>
</template>
