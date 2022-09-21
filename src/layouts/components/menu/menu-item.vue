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
    <el-sub-menu
      :index="route.path"
      v-if="route.children && route.children.length > 0"
    >
      <template #title>
        <app-svg-icon
          v-if="route.meta?.icon && route.meta?.iconType == 'app'"
          :name="route.meta.icon"
        ></app-svg-icon>
        <el-icon
          v-if="route.meta?.icon && route.meta?.iconType == ELEMENT_PLUS_PREFIX"
        >
          <component :is="route.meta?.icon"></component>
        </el-icon>
        <span>{{ route.meta?.menuName }}</span>
      </template>
      <menu-item :routes="route.children"></menu-item>
    </el-sub-menu>
    <el-menu-item :index="route.path" v-else>
      <template #title>
        <a
          v-if="route.meta?.isNewPage"
          target="_blank"
          :href="`${route.meta?.pageUrl}`"
        >
          {{ route.meta?.menuName }}
        </a>
        <template v-else>
          <app-svg-icon
            v-if="route.meta?.icon && route.meta?.iconType == 'app'"
            :name="route.meta.icon"
          ></app-svg-icon>
          <el-icon
            v-if="
              route.meta?.icon && route.meta?.iconType == ELEMENT_PLUS_PREFIX
            "
          >
            <component :is="route.meta?.icon"></component>
          </el-icon>
          <span>
            {{ route.meta?.menuName }}
          </span>
        </template>
      </template>
    </el-menu-item>
  </template>
</template>
