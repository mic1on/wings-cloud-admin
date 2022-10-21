<script setup lang="ts" name="app">
const keepAlive = import.meta.env.APP_KEEP_ALIVE;
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <div>
      <transition name="wings-app-page" mode="out-in" appear>
        <div>
          <keep-alive v-if="keepAlive">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
          <component :is="Component" v-else />
        </div>
      </transition>
    </div>
  </router-view>
</template>
