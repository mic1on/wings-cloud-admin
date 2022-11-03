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
    :title="t('admin.personalCenter.myNotifications.menuName')"
    :sub-title="t('admin.personalCenter.myNotifications.menuDescription')"
  >
    <crud-table :table-data="list">
      <template #query>
        <el-form-item
          :label="t('admin.personalCenter.myNotifications.notificationType')"
        >
          <el-select
            clearable
            v-model="query.type"
            :placeholder="
              t('base.form.enter', {
                label: t(
                  'admin.personalCenter.myNotifications.notificationTypeText'
                ),
              })
            "
          >
            <el-option
              v-for="(item, index) in notificationDict"
              :key="index"
              :label="t(item.label)"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :label="t('admin.personalCenter.myNotifications.notificationContent')"
        >
          <el-input
            v-model="query.content"
            :placeholder="
              t('base.form.enter', {
                label: t(
                  'admin.personalCenter.myNotifications.notificationContentText'
                ),
              })
            "
          />
        </el-form-item>
      </template>
      <template #table>
        <el-table-column type="index" width="50" />
        <el-table-column
          prop="type"
          :label="t('admin.personalCenter.myNotifications.notificationType')"
        />
        <el-table-column
          prop="content"
          :label="t('admin.personalCenter.myNotifications.notificationContent')"
        />
        <el-table-column
          prop="source"
          :label="t('admin.personalCenter.myNotifications.source')"
        />
        <el-table-column
          prop="datetime"
          :label="t('admin.personalCenter.myNotifications.time')"
        />
        <el-table-column
          prop="status"
          :label="t('admin.personalCenter.myNotifications.isRead')"
        />
        <el-table-column :label="t('base.crud.action')" />
      </template>
    </crud-table>
  </crud-card>
</template>
