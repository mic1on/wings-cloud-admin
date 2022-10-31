<script lang="ts" setup>
import UserTemplate from './components/user-template.vue';
import SignupForm from './components/signup-form.vue';
import TermsConditions from './components/terms-conditions.vue';

const { t } = useI18n();
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
