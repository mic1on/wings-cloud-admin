<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { userStore } = useStore();
</script>
<template>
  <crud-card
    action
    :action-submit-label="t('base.crud.update')"
    :title="t('admin.personalCenter.personalProfile.menuName')"
    :sub-title="t('admin.personalCenter.personalProfile.menuDescription')"
  >
    <el-form
      style="width: 380px"
      label-position="left"
      label-width="120px"
      m-b-6
    >
      <el-form-item :label="t('base.form.avatar')">
        <avatar-upload v-model="userStore.userProfile.avatar"></avatar-upload>
      </el-form-item>
      <el-form-item :label="t('base.form.nickname')">
        <el-input
          v-model="userStore.userProfile.nickname"
          :placeholder="
            t('base.form.enter', { label: t('base.form.nicknameText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('base.form.username')">
        <el-input
          disabled
          v-model="userStore.userProfile.username"
          :placeholder="
            t('base.form.enter', { label: t('base.form.usernameText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('base.form.mobilePhone')">
        <el-input
          v-model="userStore.userProfile.mobilePhone"
          :placeholder="
            t('base.form.enter', { label: t('base.form.mobilePhoneText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('base.form.email')">
        <el-input
          v-model="userStore.userProfile.email"
          :placeholder="
            t('base.form.enter', { label: t('base.form.emailText') })
          "
        ></el-input>
      </el-form-item>
    </el-form>
  </crud-card>
</template>
