<script lang="ts" setup>
import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { getMobileAreaCodeList } from '@/apis/base';
import UserTemplate from './components/user-template.vue';
import SignupForm from './components/signup-form.vue';
import TermsConditions from './components/terms-conditions.vue';

const { t } = useI18n();

const { data } = await getMobileAreaCodeList();
setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
</script>
<template>
  <user-template>
    <template #form>
      <signup-form></signup-form>
    </template>
    <template #terms-conditions>
      <terms-conditions :label="t('base.form.signup')"></terms-conditions>
    </template>
  </user-template>
</template>
