<script lang="ts" setup name="my-notifications">
import { useDateFormat } from '@vueuse/core';
import { useCrud } from '@/hooks/use-crud/use-crud';
import { useDict } from '@/hooks/use-crud/use-dict';

const { t } = useI18n();

const { getDict, getDictData } = useDict();

const { queryForm, tableData, query, reset } = useCrud({
  queryUrl: '/system/log/list',
});
</script>
<template>
  <crud-card>
    <crud-table-query>
      <el-form-item :model="queryForm" @query="query" @reset="reset">
        <el-input
          v-model="queryForm.username"
          :placeholder="t('system.user.username')"
        />
      </el-form-item>
      <el-form-item>
        <el-select
          clearable
          v-model="queryForm.type"
          :placeholder="t('system.log.status')"
        >
          <el-option
            v-for="(item, index) in getDictData('logStatus').value"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <template #action>
        <el-button type="primary">{{ t('crud.btn.add') }}</el-button>
      </template>
    </crud-table-query>
    <crud-table :data="tableData">
      <el-table-column
        type="index"
        width="60"
        :label="t('crud.table.no')"
      ></el-table-column>
      <el-table-column
        prop="avatar"
        :label="t('system.user.username')"
      ></el-table-column>
      <el-table-column
        prop="action"
        :label="t('system.log.action')"
      ></el-table-column>
      <el-table-column prop="ip" :label="t('system.log.ip')"></el-table-column>
      <el-table-column prop="status" :label="t('system.log.status')">
        <template #default="scope">
          {{ getDict('logStatus', scope.row.status) }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" :label="t('crud.table.actionTime')">
        <template #default="scope">
          {{ useDateFormat(scope.row.createTime, 'YYYY-MM-DD HH:mm:ss').value }}
        </template>
      </el-table-column>
      <el-table-column :label="t('crud.btn.action')" fixed="right" width="120">
        <el-button type="primary" link>
          {{ t('system.log.api') }}
        </el-button>
      </el-table-column>
    </crud-table>
  </crud-card>
</template>
