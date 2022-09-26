<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import { ELEMENT_PLUS_PREFIX } from '@/plugins/element-plus/prefix';
import MenuItem from './menu-item.vue';

const props = defineProps({
  routes: {
    type: Array<RouteRecordRaw>,
    default: () => {
      return [];
    },
  },
});
</script>

<template>
  <template v-for="(route, index) in props.routes" :key="index">
    <el-menu-item
      :index="route.path"
      v-if="!route.children || route.children.length === 0"
    >
      <a
        v-if="route.meta?.externalPage"
        target="_blank"
        :href="route.meta?.externalPageUrl"
        text-2
      >
        {{ route.meta?.menuName }}
      </a>
      <template v-else>
        <app-svg-icon
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == 'app'"
          :name="route.meta.icon"
        ></app-svg-icon>
        <el-icon
          width="1rem"
          height="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == ELEMENT_PLUS_PREFIX"
        >
          <component :is="route.meta?.icon"></component>
        </el-icon>
        <span text="3.4">
          {{ route.meta?.menuName }}
        </span>
      </template>
    </el-menu-item>
    <el-sub-menu :index="route.path" v-else>
      <template #title>
        <app-svg-icon
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == 'app'"
          :name="route.meta.icon"
        ></app-svg-icon>
        <el-icon
          width="1rem"
          height="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == ELEMENT_PLUS_PREFIX"
        >
          <component :is="route.meta?.icon"></component>
        </el-icon>
        <span text="3.4">{{ route.meta?.menuName }}</span>
      </template>
      <menu-item :routes="route.children"></menu-item>
    </el-sub-menu>
  </template>
</template>
