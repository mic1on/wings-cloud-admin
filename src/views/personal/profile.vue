<script lang="ts" setup name="personal-profile">
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { userStore } = useStore();
</script>
<template>
  <crud-card>
    <crud-page-form label-position="top">
      <el-form-item :label="t('crud.account.avatar')">
        <avatar-upload v-model="userStore.userProfile.avatar"></avatar-upload>
      </el-form-item>
      <el-form-item :label="t('crud.account.nickname')">
        <el-input
          v-model="userStore.userProfile.nickname"
          :placeholder="t('crud.account.nickname')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('crud.account.username')">
        <el-input
          disabled
          v-model="userStore.userProfile.username"
          :placeholder="t('crud.account.username')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('crud.phone.phone')">
        <el-input
          v-model="userStore.userProfile.mobilePhone"
          :placeholder="t('crud.phone.phone')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('personal.profile.defaultRole')">
        <el-select v-model="userStore.userProfile.defaultRole">
          <el-option
            v-for="(item, index) in userStore.userProfile.roleList"
            :key="index"
            :value="item.id"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <template #action>
        <el-button type="primary">
          {{ t('crud.btn.update') }}
        </el-button>
        <el-button>
          {{ t('app.toolbar.avatar.signout') }}
        </el-button>
      </template>
    </crud-page-form>
  </crud-card>
</template>
<style lang="scss" scoped>
:deep(.el-select) {
  width: 100%;
}
</style>
