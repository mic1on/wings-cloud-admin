<script lang="ts" setup name="my-notifications">
import { StorageEnum } from '@/enums';
import { getStorage } from '@/utils/storage';
import { useCrud } from '@/hooks/use-crud';

const { t } = useI18n();

const notificationDict = getStorage(StorageEnum.DICT).notificationType;

const { query, list } = useCrud();

query.value = {
  content: '',
  type: '',
};
</script>
<template>
  <crud-card
    :title="t('personal.notifications.menuName')"
    :sub-title="t('personal.notifications.menuDescription')"
  >
    <crud-table :table-data="list">
      <template #query>
        <el-form-item>
          <el-select
            clearable
            v-model="query.type"
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
            v-model="query.content"
            :placeholder="t('personal.notifications.notificationContent')"
          />
        </el-form-item>
      </template>
      <template #table>
        <el-table-column type="index" width="50" />
        <el-table-column
          prop="type"
          :label="t('personal.notifications.notificationType')"
        />
        <el-table-column
          prop="content"
          :label="t('personal.notifications.notificationContent')"
        />
        <el-table-column
          prop="source"
          :label="t('personal.notifications.source')"
        />
        <el-table-column
          prop="datetime"
          :label="t('personal.notifications.time')"
        />
        <el-table-column
          prop="status"
          :label="t('personal.notifications.isRead')"
        />
        <el-table-column :label="t('crud.btn.action')" />
      </template>
    </crud-table>
  </crud-card>
</template>
