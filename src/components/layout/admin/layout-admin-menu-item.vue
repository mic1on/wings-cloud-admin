<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import { IconTypeEnum } from '@/enums';

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
        <svg-icon
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == IconTypeEnum.APP"
          :name="route.meta.icon"
        ></svg-icon>
        <el-icon
          width="1rem"
          height="1rem"
          v-if="
            route.meta?.icon &&
            route.meta?.iconType == IconTypeEnum.ELEMENT_PLUS
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
        <svg-icon
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == IconTypeEnum.APP"
          :name="route.meta.icon"
        ></svg-icon>
        <el-icon
          width="1rem"
          height="1rem"
          v-if="
            route.meta?.icon &&
            route.meta?.iconType == IconTypeEnum.ELEMENT_PLUS
          "
        >
          <component :is="route.meta?.icon"></component>
        </el-icon>
        <span text="3.4">{{ route.meta?.menuName }}</span>
      </template>
      <layout-admin-menu-item :routes="route.children"></layout-admin-menu-item>
    </el-sub-menu>
  </template>
</template>
