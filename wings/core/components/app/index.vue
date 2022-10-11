<script setup lang="ts">
import AppProvider from '../app-provider/index.vue';
</script>

<template>
  <app-provider>
    <template #app>
      <router-view />
    </template>
  </app-provider>
</template>
