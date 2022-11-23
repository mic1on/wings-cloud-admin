<script lang="ts" setup name="my-notifications">
import { StorageEnum } from '@/constants/enums';
import { getStorage } from '@/utils/storage';
import { useCrud } from '@/hooks/use-crud';

const { t } = useI18n();

const roleTypeDict = getStorage(StorageEnum.DICT).roleType;

const { queryForm, tableData, query, reset } = useCrud();

queryForm.value = {
  roleName: '',
  roleType: '',
};
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
          v-model="queryForm.roleName"
          :placeholder="t('authority.role.roleName')"
        />
      </el-form-item>
    </crud-table-query>
    <el-table :data="tableData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column
        prop="type"
        :label="t('authority.role.roleType')"
      ></el-table-column>
      <el-table-column
        prop="name"
        :label="t('authority.role.roleName')"
      ></el-table-column>
      <el-table-column
        prop="remark"
        :label="t('authority.role.remark')"
      ></el-table-column>
      <el-table-column
        prop="createTime"
        :label="t('authority.role.createTime')"
      ></el-table-column>
      <el-table-column :label="t('crud.btn.action')"></el-table-column>
    </el-table>
  </crud-card>
</template>
