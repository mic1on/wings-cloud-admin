<script lang="ts" setup name="my-notifications">
import { useRouteStore } from '@/hooks/use-store/use-route-store';
import { IconTypeEnum } from '@/constants/enums';

const { t } = useI18n();

const routeStore = useRouteStore();

const keepAliveChange = (e: boolean) => {
  console.log(e);
};
</script>
<template>
  <crud-card>
    <crud-table-query :query="false">
      <template #action>
        <el-button type="primary">{{ t('crud.btn.add') }}</el-button>
      </template>
    </crud-table-query>
    <crud-table :data="routeStore.menuRoutes" action-width="300" row-key="path">
      <el-table-column :label="t('system.menu.menu')">
        <template #default="scope">
          {{ scope.row.meta.menuName }}
        </template>
      </el-table-column>
      <el-table-column :label="t('system.menu.icon')">
        <template #default="scope">
          <svg-icon
            v-if="scope.row.meta.iconType === IconTypeEnum.APP"
            :name="scope.row.meta.icon"
          ></svg-icon>
          <el-icon v-if="scope.row.meta.iconType === IconTypeEnum.ELEMENT_PLUS">
            <component :is="scope.row.meta.icon"></component>
          </el-icon>
        </template>
      </el-table-column>
      <el-table-column :label="t('system.menu.type')">
        <template #default="scope">
          <el-tag v-if="scope.row.meta.async">
            {{ t('system.menu.async') }}
          </el-tag>
          <el-tag v-else>
            {{ t('system.menu.static') }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="t('system.menu.open')">
        <template #default="scope">
          <el-tag v-if="scope.row.meta.externalPage">
            {{ t('system.menu.outside') }}
          </el-tag>
          <el-tag v-else>
            {{ t('system.menu.inside') }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="t('system.menu.keepAlive')">
        <template #default="scope">
          <el-switch
            v-model="scope.row.meta.keepAlive"
            @change="keepAliveChange"
          />
        </template>
      </el-table-column>
      <el-table-column :label="t('crud.table.sort')">
        <template #default="scope">
          {{ scope.row.meta.sort }}
        </template>
      </el-table-column>
      <el-table-column :label="t('system.menu.router')">
        <template #default="scope">
          {{ scope.row.path }}
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        :label="t('system.role.remark')"
      ></el-table-column>
      <template #action>
        <el-button type="primary" link>
          {{ t('system.menu.subMenu') }}
        </el-button>
        <el-button type="primary" link>
          {{ t('system.menu.permission') }}
        </el-button>
        <el-button type="primary" link>
          {{ t('crud.btn.edit') }}
        </el-button>
        <el-button type="primary" link>
          {{ t('crud.btn.delete') }}
        </el-button>
      </template>
    </crud-table>
  </crud-card>
</template>
