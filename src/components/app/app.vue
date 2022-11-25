<script setup lang="ts" name="app">
import { Settings } from '@/constants/settings';
</script>

<template>
  <app-provider>
    <template #app>
      <router-view v-slot="{ Component, route }">
        <Suspense>
          <transition
            v-if="Settings.KeepAlive"
            name="wings-cloud-page"
            mode="out-in"
            appear
          >
            <keep-alive>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
          <transition v-else name="wings-cloud-page" mode="out-in" appear>
            <component :is="Component" />
          </transition>
          <template #fallback> Loading... </template>
        </Suspense>
      </router-view>
    </template>
  </app-provider>
</template>

<style lang="scss" scoped>
.wings-cloud-page-enter-active {
  transition: 0.2s;
}

.wings-cloud-page-leave-active {
  transition: 0.15s;
}

.wings-cloud-page-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.wings-cloud-page-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
