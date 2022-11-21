<script lang="ts" setup name="my-notifications">
import { StorageEnum } from '@/enums';
import { getStorage } from '@/utils/storage';
import { useCrud } from '@/hooks/use-crud';

const { t } = useI18n();

const roleTypeDict = getStorage(StorageEnum.DICT).roleType;

const { queryForm, list } = useCrud();

queryForm.value = {
  roleType: '',
  nickname: '',
  username: '',
  mobile: '',
};
</script>
<template>
  <crud-card>
    <crud-table :table-data="list">
      <template #query>
        <el-form-item>
          <el-select
            clearable
            v-model="queryForm.roleType"
            :placeholder="t('authority.role.roleType')"
          >
            <el-option
              v-for="(item, index) in roleTypeDict"
              :key="index"
              :label="t(item.label)"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="queryForm.nickname"
            :placeholder="t('authority.user.nickname')"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="queryForm.username"
            :placeholder="t('authority.user.username')"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="queryForm.mobile"
            :placeholder="t('authority.user.mobile')"
          />
        </el-form-item>
      </template>
      <template #table>
        <el-table-column type="index" width="50" />
        <el-table-column prop="type" :label="t('authority.user.avatar')" />
        <el-table-column prop="type" :label="t('authority.user.nickname')" />
        <el-table-column prop="type" :label="t('authority.user.username')" />
        <el-table-column prop="name" :label="t('authority.user.mobile')" />
        <el-table-column prop="remark" :label="t('authority.role.roleName')" />
        <el-table-column
          prop="createTime"
          :label="t('authority.role.createTime')"
        />
        <el-table-column :label="t('crud.btn.action')" />
      </template>
    </crud-table>
  </crud-card>
</template>
