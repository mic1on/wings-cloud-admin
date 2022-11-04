<script lang="ts" setup name="personal-profile">
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { userStore } = useStore();

const width = ref('width:240px');
</script>
<template>
  <crud-card
    action
    custom-action
    :title="t('admin.personalCenter.personalProfile.menuName')"
    :sub-title="t('admin.personalCenter.personalProfile.menuDescription')"
  >
    <el-form
      style="width: 380px"
      label-position="left"
      label-width="140px"
      m-b-6
    >
      <el-form-item :label="t('base.form.avatar')">
        <avatar-upload v-model="userStore.userProfile.avatar"></avatar-upload>
      </el-form-item>
      <el-form-item :label="t('base.form.nickname')">
        <el-input
          :style="[width]"
          v-model="userStore.userProfile.nickname"
          :placeholder="
            t('base.form.enter', { label: t('base.form.nicknameText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('base.form.username')">
        <el-input
          disabled
          :style="[width]"
          v-model="userStore.userProfile.username"
          :placeholder="
            t('base.form.enter', { label: t('base.form.usernameText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('base.form.mobilePhone')">
        <el-input
          :style="[width]"
          v-model="userStore.userProfile.mobilePhone"
          :placeholder="
            t('base.form.enter', { label: t('base.form.mobilePhoneText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('base.form.email')">
        <el-input
          :style="[width]"
          v-model="userStore.userProfile.email"
          :placeholder="
            t('base.form.enter', { label: t('base.form.emailText') })
          "
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="t('admin.personalCenter.personalSettings.defaultRole')"
      >
        <el-select :style="[width]" v-model="userStore.userProfile.defaultRole">
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
      <el-button>
        {{ t('admin.personalCenter.personalSettings.menuName') }}
      </el-button>
    </template>
  </crud-card>
</template>
