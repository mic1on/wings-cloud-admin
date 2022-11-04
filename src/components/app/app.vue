<script setup lang="ts" name="app">
const keepAlive = import.meta.env.APP_KEEP_ALIVE;
</script>

<template>
  <app-provider>
    <template #app>
      <router-view v-slot="{ Component, route }">
        <div id="app">
          <transition name="app-page" mode="out-in" appear>
            <Suspense>
              <keep-alive v-if="keepAlive">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
              <component :is="Component" v-else />
              <template #fallback> Loading... </template>
            </Suspense>
          </transition>
        </div>
      </router-view>
    </template>
  </app-provider>
</template>

<style lang="scss" scoped>
#app {
  position: relative;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

#app-component-node {
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.app-page-enter-active {
  transition: 0.2s;
}

.app-page-leave-active {
  transition: 0.15s;
}

.app-page-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.app-page-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
