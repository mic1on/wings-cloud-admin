<script setup lang="ts">
const keepAlive = import.meta.env.APP_KEEP_ALIVE;
</script>

<template>
  <app-provider>
    <template #app>
      <router-view v-slot="{ Component, route }">
        <keep-alive v-if="keepAlive">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component :is="Component" v-else />
      </router-view>
    </template>
  </app-provider>
</template>

<style lang="scss" scoped>
.app-enter-active {
  transition: 0.2s;
}

.app-leave-active {
  transition: 0.15s;
}

.app-enter-from {
  margin-left: -20px;
  opacity: 0;
}

.app-leave-to {
  margin-left: 20px;
  opacity: 0;
}
</style>
