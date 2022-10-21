<script setup lang="ts" name="app">
const keepAlive = import.meta.env.APP_KEEP_ALIVE;
</script>

<template>
  <app-provider>
    <template #app>
      <router-view v-slot="{ Component, route }">
        <div id="wings-app">
          <transition name="wings-app-page" mode="out-in" appear>
            <div id="transition-component-node">
              <keep-alive v-if="keepAlive">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
              <component :is="Component" v-else />
            </div>
          </transition>
        </div>
      </router-view>
    </template>
  </app-provider>
</template>

<style lang="scss" scoped>
#wings-app {
  position: relative;
  flex: auto;
  height: 100%;
  overflow: hidden;
  transition: 0.3s;
}

.wings-app-page-enter-active {
  transition: 0.2s;
}

.wings-app-page-leave-active {
  transition: 0.15s;
}

.wings-app-page-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.wings-app-page-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
