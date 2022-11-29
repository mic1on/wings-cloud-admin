<script lang="ts" setup name="my-notifications">
import { useCrud } from '@/hooks/use-crud/use-crud';

const { t } = useI18n();

const { queryForm, tableData, query, reset } = useCrud({
  queryUrl: '/system/menu/list',
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
      :query="false"
    >
      <template #action>
        <el-button type="primary">{{ t('crud.btn.add') }}</el-button>
      </template>
    </crud-table-query>
    <crud-table :data="tableData">
      <el-table-column
        prop="name"
        :label="t('system.menu.menu')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.menu.icon')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.menu.type')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.menu.open')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('crud.table.sort')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.menu.router')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.menu.role')"
      ></el-table-column>
      <el-table-column
        prop="remark"
        :label="t('system.role.remark')"
      ></el-table-column>
      <template #action>
        <el-button type="primary" link>
          {{ t('crud.btn.add') }}
        </el-button>
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
