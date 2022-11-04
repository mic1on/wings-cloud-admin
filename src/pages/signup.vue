<script lang="ts" setup>
import SignTemplate from './components/sign-template.vue';
import SignupForm from './components/signup-form.vue';
import TermsConditions from './components/terms-conditions.vue';

const { t } = useI18n();
</script>
<template>
  <sign-template>
    <template #title>
      <div mb-10 text-6 font-600 style="color: var(--el-text-color-primary)">
        {{ t('pages.signup.title', { text: t('app.name') }) }}
      </div>
    </template>
    <template #form>
      <signup-form></signup-form>
    </template>
    <template #terms-conditions>
      <terms-conditions :label="t('pages.signup.btn')"></terms-conditions>
    </template>
  </sign-template>
</template>
