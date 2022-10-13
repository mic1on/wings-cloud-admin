<script lang="ts" setup>
const route = useRoute();

const isKeepAlive = import.meta.env.APP_KEEP_ALIVE;
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive v-if="isKeepAlive">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
    <component :is="Component" v-else />
  </router-view>
</template>
