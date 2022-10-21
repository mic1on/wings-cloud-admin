<script lang="ts" setup>
import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { getMobileAreaCodeList } from '@/apis/base';
import UserTemplate from './components/user-template.vue';
import PasswordPhoneForm from './components/password-forget-form.vue';

const { data } = await getMobileAreaCodeList();
setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
</script>
<template>
  <user-template>
    <template #form>
      <password-phone-form></password-phone-form>
    </template>
  </user-template>
</template>
