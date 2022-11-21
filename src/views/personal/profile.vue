<script lang="ts" setup name="personal-profile">
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { userStore } = useStore();

const width = ref('width:240px');
</script>
<template>
  <crud-card action custom-action>
    <el-form
      style="width: 380px"
      label-position="left"
      label-width="140px"
      m-b-6
    >
      <el-form-item :label="t('crud.account.avatar')">
        <avatar-upload v-model="userStore.userProfile.avatar"></avatar-upload>
      </el-form-item>
      <el-form-item :label="t('crud.account.nickname')">
        <el-input
          :style="[width]"
          v-model="userStore.userProfile.nickname"
          :placeholder="t('crud.account.nickname')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('crud.account.username')">
        <el-input
          disabled
          :style="[width]"
          v-model="userStore.userProfile.username"
          :placeholder="t('crud.account.username')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('crud.phone.phone')">
        <el-input
          :style="[width]"
          v-model="userStore.userProfile.mobilePhone"
          :placeholder="t('crud.phone.phone')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="t('personal.profile.defaultRole')">
        <el-select :style="[width]" v-model="userStore.userProfile.defaultRole">
          <el-option
            v-for="(item, index) in userStore.userProfile.roleList"
            :key="index"
            :value="item.id"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
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
