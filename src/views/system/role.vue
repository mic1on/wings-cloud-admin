<script lang="ts" setup name="my-notifications">
import { useDateFormat } from '@vueuse/core';
import { useCrud } from '@/hooks/use-crud/use-crud';

const { t } = useI18n();

const { queryForm, tableData, query, reset, loading } = useCrud({
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
      <template #action>
        <el-button>{{ t('crud.btn.add') }}</el-button>
      </template>
    </crud-table-query>
    <crud-table :data="tableData" v-loading="loading">
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
      <template #action>
        <el-button type="primary" link>
          {{ t('crud.btn.edit') }}
        </el-button>
        <el-button type="primary" link>
          {{ t('crud.btn.delete') }}
        </el-button>
      </template>
    </crud-table>
  </crud-card>
</template>
