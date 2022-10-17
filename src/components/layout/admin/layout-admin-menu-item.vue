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
        :href="route.meta.externalPageUrl"
        text-2
      >
        {{ route.meta?.menuName }}
      </a>
      <template v-else>
        <svg-icon
          show-ep-width
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == IconTypeEnum.APP"
          :name="(route.meta.icon as string)"
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
          show-ep-width
          size="1rem"
          v-if="route.meta?.icon && route.meta?.iconType == IconTypeEnum.APP"
          :name="(route.meta.icon as string)"
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

<style lang="scss" scoped>
.ep-menu-item {
  width: 100% !important;
  min-width: auto !important;
  margin-bottom: var(--wings-menu-gap);
  color: var(--wings-menu-text-color);
  border-radius: var(--wings-menu-radius);

  &:last-child {
    margin-bottom: 0;
  }
}

.ep-menu-item.is-active {
  color: var(--wings-menu-text-color-active) !important;
  background-color: var(--wings-menu-bg-color-active) !important;
}

.ep-menu-item:hover {
  color: var(--wings-menu-text-color-hover);
  background-color: var(--wings-menu-bg-color-hover);
}

.ep-sub-menu {
  margin-bottom: var(--wings-menu-gap);

  &:last-child {
    margin-bottom: 0;
  }

  :deep(.ep-sub-menu__title) {
    margin-bottom: var(--wings-menu-gap);
    color: var(--wings-menu-text-color);
    border-radius: var(--wings-menu-radius);
  }

  :deep(.ep-sub-menu__title:hover) {
    color: var(--wings-menu-text-color-hover);
    background-color: var(--wings-menu-bg-color-hover);
  }
}
</style>
