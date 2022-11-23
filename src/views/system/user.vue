<script lang="ts" setup name="my-notifications">
import { StorageEnum } from '@/constants/enums';
import { getStorage } from '@/utils/storage';
import { useCrud } from '@/hooks/use-crud/use-crud';

const { t } = useI18n();

const roleTypeDict = getStorage(StorageEnum.DICT).roleType;

const { queryForm, tableData, query, reset } = useCrud();

queryForm.value = {
  roleType: '',
  nickname: '',
  username: '',
  mobile: '',
};
</script>
<template>
  <crud-card>
    <el-form :inline="true" :model="queryForm">
      <el-form-item>
        <el-select
          clearable
          v-model="queryForm.roleType"
          :placeholder="t('system.role.roleType')"
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
          :placeholder="t('system.user.nickname')"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="queryForm.username"
          :placeholder="t('system.user.username')"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="queryForm.mobile"
          :placeholder="t('system.user.mobile')"
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
        :label="t('system.user.avatar')"
      ></el-table-column>
      <el-table-column
        prop="type"
        :label="t('system.user.nickname')"
      ></el-table-column>
      <el-table-column
        prop="type"
        :label="t('system.user.username')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('system.user.mobile')"
      ></el-table-column>
      <el-table-column
        prop="remark"
        :label="t('system.role.roleName')"
      ></el-table-column>
      <el-table-column
        prop="createTime"
        :label="t('system.role.createTime')"
      ></el-table-column>
      <el-table-column :label="t('crud.btn.action')"> </el-table-column>
    </el-table>
  </crud-card>
</template>
