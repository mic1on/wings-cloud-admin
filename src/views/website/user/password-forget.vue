<script lang="ts" setup>
import UserTemplate from './components/user-template.vue';
import PasswordPhoneForm from './components/password-forget-form.vue';
</script>
<template>
  <user-template>
    <template #form>
      <password-phone-form></password-phone-form>
    </template>
  </user-template>
</template>
