<script lang="ts" setup name="personal-profile">
import { useUserStore } from '@/hooks/use-store/use-user-store';

const { t } = useI18n();

const userStore = useUserStore();
</script>
<template>
  <crud-card action>
    <crud-page-form
      label-position="left"
      label-width="120px"
      style="max-width: 400px"
    >
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
      <el-form-item :label="t('system.profile.defaultRole')">
        <el-select v-model="userStore.userProfile.defaultRole">
          <el-option
            v-for="(item, index) in userStore.userProfile.roleList"
            :key="index"
            :value="item.id"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
    </crud-page-form>
    <template #action>
      <el-button type="primary">
        {{ t('crud.btn.update') }}
      </el-button>
      <el-button>
        {{ t('app.toolbar.avatar.signout') }}
      </el-button>
    </template>
  </crud-card>
</template>
