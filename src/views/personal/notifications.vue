<script lang="ts" setup name="my-notifications">
import { StorageEnum } from '@/enums';
import { useDateFormat } from '@vueuse/core';
import { getStorage } from '@/utils/storage';
import { useCrud } from '@/hooks/use-crud';
import { IObject } from '@/global';

const { t } = useI18n();

const notificationDict = getStorage(StorageEnum.DICT).notificationType;

const { queryForm, tableData, query, reset } = useCrud();

queryForm.value = {
  content: '',
  type: '',
};

const read = (row: IObject) => {
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
          :placeholder="t('personal.notifications.notificationType')"
        >
          <el-option
            v-for="(item, index) in notificationDict"
            :key="index"
            :label="t(item.label)"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="queryForm.content"
          :placeholder="t('personal.notifications.notificationContent')"
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
        :label="t('personal.notifications.notificationType')"
      ></el-table-column>
      <el-table-column
        prop="content"
        :label="t('personal.notifications.notificationContent')"
      ></el-table-column>
      <el-table-column
        prop="source"
        :label="t('personal.notifications.source')"
      ></el-table-column>
      <el-table-column
        prop="createTime"
        :label="t('personal.notifications.time')"
      >
        <template #default="scope">
          {{ useDateFormat(scope.row.createTime, 'YYYY-MM-DD HH:mm:ss') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        :label="t('personal.notifications.isRead')"
      ></el-table-column>
      <el-table-column :label="t('crud.btn.action')">
        <template #default="scope">
          <el-button type="primary" bg text @click="read(scope.row)">
            {{ t('personal.notifications.read') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </crud-card>
</template>
