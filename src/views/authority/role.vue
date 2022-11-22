<script lang="ts" setup name="my-notifications">
import { StorageEnum } from '@/enums';
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
    <el-form :inline="true" :model="queryForm" label-width="120px">
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
