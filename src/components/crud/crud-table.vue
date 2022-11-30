<script lang="ts" setup name="crud-card">
import type { ComponentInternalInstance } from 'vue';

const { slots } = getCurrentInstance() as ComponentInternalInstance;

const { t } = useI18n();

const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return [];
    },
  },
  actionLabel: {
    type: String,
    default: '',
  },
  actionWidth: {
    type: String,
    default: '120',
  },
});
</script>
<template>
  <div class="wings-cloud-crud-table">
    <el-table
      v-bind="$attrs"
      :data="props.data"
      :empty-text="t('crud.table.noData')"
      row-class-name="wings-cloud-crud-table-row"
      cell-class-name="wings-cloud-crud-table-cell"
      header-row-class-name="wings-cloud-crud-table-header-row"
      header-cell-class-name="wings-cloud-crud-table-header-cell"
    >
      <el-table-column
        type="index"
        width="60"
        :label="t('crud.table.no')"
      ></el-table-column>
      <slot></slot>
      <el-table-column
        v-if="slots.action"
        :width="props.actionWidth"
        :label="props.actionLabel || t('crud.btn.action')"
      >
        <div class="wings-cloud-crud-table-action">
          <slot name="action"> </slot>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss">
:root {
  --wings-cloud-table-table-row-height: 3.2rem;
}

.wings-cloud-crud-table {
}

.el-table__body {
}

.wings-cloud-crud-table-row {
  height: var(--wings-cloud-table-table-row-height);
}

.wings-cloud-crud-table-cell {
}

.wings-cloud-crud-table-header-row {
  &:first-child {
    height: var(--wings-cloud-table-table-row-height);
  }
}

.wings-cloud-crud-table-header-cell {
}

.wings-cloud-crud-table-action {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  .el-button.is-text {
    margin-right: 12px;
    margin-left: 0;
    padding: 0 !important;
  }

  .el-button:last-child {
    margin-right: 0;
  }
}
</style>
