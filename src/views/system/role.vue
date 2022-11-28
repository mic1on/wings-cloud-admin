<script lang="ts" setup name="my-notifications">
import { useDateFormat } from '@vueuse/core';
import { useCrud } from '@/hooks/use-crud/use-crud';

const { t } = useI18n();

const { queryForm, tableData, query, reset } = useCrud({
  queryUrl: '/system/role/list',
});
</script>
<template>
  <crud-card>
    <crud-table-query
      :inline="true"
      :model="queryForm"
      label-width="120px"
      @query="query"
      @reset="reset"
    >
      <el-form-item>
        <el-input
          v-model="queryForm.roleName"
          :placeholder="t('system.role.roleName')"
        />
      </el-form-item>
    </crud-table-query>
    <crud-table :data="tableData">
      <el-table-column
        type="index"
        width="60"
        :label="t('crud.table.no')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.role.roleName')"
      ></el-table-column>
      <el-table-column
        prop="remark"
        :label="t('system.role.remark')"
      ></el-table-column>
      <el-table-column prop="createTime" :label="t('system.role.createTime')">
        <template #default="scope">
          {{ useDateFormat(scope.row.createTime, 'YYYY-MM-DD HH:mm:ss').value }}
        </template>
      </el-table-column>
      <el-table-column :label="t('crud.btn.action')">
        <template #default>
          <el-button type="primary" bg text>
            {{ t('crud.btn.edit') }}
          </el-button>
        </template>
      </el-table-column>
    </crud-table>
  </crud-card>
</template>
