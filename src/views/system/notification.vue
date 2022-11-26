<script lang="ts" setup name="my-notifications">
import type { IObject } from '@/types/global.d';
import { StorageEnum } from '@/constants/enums';
import { useDateFormat } from '@vueuse/core';
import { getStorage } from '@/utils/storage';
import { useCrud } from '@/hooks/use-crud/use-crud';

const { t } = useI18n();

const notificationDict = getStorage(StorageEnum.DICT).notificationType;

const { queryForm, tableData, query, reset } = useCrud({
  queryUrl: '/system/user/notification',
});

const read = (row: IObject): void => {
  console.log(row);
};
</script>
<template>
  <crud-card>
    <el-form :inline="true" :model="queryForm">
      <el-form-item>
        <el-select
          clearable
          v-model="queryForm.type"
          :placeholder="t('system.notification.notificationType')"
        >
          <el-option
            v-for="(item, index) in notificationDict"
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
      <el-form-item>
        <el-button type="primary" @click="query">
          {{ t('crud.btn.query') }}
        </el-button>
        <el-button @click="reset">
          {{ t('crud.btn.reset') }}
        </el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column
        prop="type"
        :label="t('system.notification.notificationType')"
      ></el-table-column>
      <el-table-column
        prop="content"
        :label="t('system.notification.notificationContent')"
      ></el-table-column>
      <el-table-column
        prop="source"
        :label="t('system.notification.source')"
      ></el-table-column>
      <el-table-column prop="createTime" :label="t('system.notification.time')">
        <template #default="scope">
          {{ useDateFormat(scope.row.createTime, 'YYYY-MM-DD HH:mm:ss') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        :label="t('system.notification.isRead')"
      ></el-table-column>
      <el-table-column :label="t('crud.btn.action')">
        <template #default="scope">
          <el-button type="primary" bg text @click="read(scope.row)">
            {{ t('system.notification.read') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </crud-card>
</template>
