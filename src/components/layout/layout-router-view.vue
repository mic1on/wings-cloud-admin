<script setup lang="ts">
const keepAlive = import.meta.env.APP_KEEP_ALIVE;
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <div id="wings-app-router-view">
      <transition name="wings-app-router-view" mode="out-in" appear>
        <div id="wings-app-transition-component-node">
          <keep-alive v-if="keepAlive">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
          <component :is="Component" v-else />
        </div>
      </transition>
    </div>
  </router-view>
</template>

<style lang="scss" scoped>
#wings-app {
  position: relative;
  flex: auto;
  height: 100%;
  overflow: hidden;
  transition: 0.3s;
}

.wings-app-router-view-enter-active {
  transition: 0.2s;
}

.wings-app-router-view-leave-active {
  transition: 0.15s;
}

.wings-app-router-view-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.wings-app-router-view-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
