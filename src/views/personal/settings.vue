<script lang="ts" setup name="personal-settings">
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { userStore } = useStore();

const width = ref('width:240px');
</script>
<template>
  <crud-card
    action
    custom-action
    :title="t('admin.personalCenter.personalSettings.menuName')"
    :sub-title="t('admin.personalCenter.personalSettings.menuDescription')"
  >
    <el-form
      style="width: 380px"
      label-position="left"
      label-width="140px"
      m-b-6
    >
      <el-form-item
        :label="t('admin.personalCenter.personalSettings.switchRole')"
      >
        <el-select :style="[width]" v-model="userStore.userProfile.currentRole">
          <el-option
            v-for="(item, index) in userStore.userProfile.roleList"
            :key="index"
            :value="item.id"
            :label="t(item.label)"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #action>
      <el-button type="primary">
        {{ t('base.crud.update') }}
      </el-button>
      <el-button type="danger" @click="userStore.logout()">
        {{ t('base.form.logout') }}
      </el-button>
    </template>
  </crud-card>
</template>
