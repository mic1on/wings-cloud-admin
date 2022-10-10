<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import { AppIconTypeEnum } from '@/enums';
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
        <wings-svg-icon
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == AppIconTypeEnum.APP"
          :name="route.meta.icon"
        ></wings-svg-icon>
        <el-icon
          width="1rem"
          height="1rem"
          v-if="
            route.meta?.icon &&
            route.meta?.iconType == AppIconTypeEnum.ELEMENT_PLUS
          "
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
        <wings-svg-icon
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == AppIconTypeEnum.APP"
          :name="route.meta.icon"
        ></wings-svg-icon>
        <el-icon
          width="1rem"
          height="1rem"
          v-if="
            route.meta?.icon &&
            route.meta?.iconType == AppIconTypeEnum.ELEMENT_PLUS
          "
        >
          <component :is="route.meta?.icon"></component>
        </el-icon>
        <span text="3.4">{{ route.meta?.menuName }}</span>
      </template>
      <menu-item :routes="route.children"></menu-item>
    </el-sub-menu>
  </template>
</template>
