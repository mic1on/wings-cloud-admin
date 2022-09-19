<script setup lang="ts">
import AppProvider from './AppProvider.vue';
</script>

<template>
  <app-provider>
    <template #app>
      <router-view />
    </template>
  </app-provider>
</template>
