<script lang="ts" setup name="my-notifications">
import { useDateFormat } from '@vueuse/core';
import { useCrud } from '@/hooks/use-crud/use-crud';
import { useDict } from '@/hooks/use-crud/use-dict';

const { t } = useI18n();

const { getDict, getDictData } = useDict();

const { queryForm, tableData, query, reset, loading } = useCrud({
  queryUrl: '/system/user/notification',
});
</script>
<template>
  <crud-card>
    <crud-table-query :model="queryForm" @query="query" @reset="reset">
      <el-form-item>
        <el-select
          clearable
          v-model="queryForm.type"
          :placeholder="t('system.notification.notificationType')"
        >
          <el-option
            v-for="(item, index) in getDictData('notificationType').value"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="queryForm.content"
          :placeholder="t('system.notification.notificationContent')"
        />
      </el-form-item>
    </crud-table-query>
    <crud-table :data="tableData" v-loading="loading">
      <el-table-column
        prop="type"
        :label="t('system.notification.notificationType')"
      >
        <template #default="scope">
          {{ getDict('notificationType', scope.row.type) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        :label="t('system.notification.notificationContent')"
      ></el-table-column>
      <el-table-column prop="source" :label="t('system.notification.source')">
        <template #default="scope">
          {{ getDict('notificationSource', scope.row.type) }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" :label="t('system.notification.time')">
        <template #default="scope">
          {{ useDateFormat(scope.row.createTime, 'YYYY-MM-DD HH:mm:ss').value }}
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="t('system.notification.isRead')">
        <template #default="scope">
          {{ getDict('notificationIsRead', scope.row.status) }}
        </template>
      </el-table-column>
      <el-table-column :label="t('crud.btn.action')">
        <template #default="scope">
          <el-button type="primary" bg text v-if="scope.row.status === 0">
            {{ t('system.notification.read') }}
          </el-button>
        </template>
      </el-table-column>
    </crud-table>
  </crud-card>
</template>
