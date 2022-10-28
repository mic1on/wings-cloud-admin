<script lang="ts" setup name="layout-admin-menu-item">
import type { RouteRecordRaw } from 'vue-router';
import { IconTypeEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';

const props = defineProps({
  routes: {
    type: Array<RouteRecordRaw>,
    default: () => {
      return [];
    },
  },
});

const { baseStore } = useStore();
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
        class="single-line-omitted"
        :style="baseStore.collapse ? '' : 'width: 100%'"
      >
        {{ route.meta?.menuName }}
      </a>
      <template v-else>
        <svg-icon
          show-el-width
          size="1.1rem"
          v-if="route.meta?.icon && route.meta?.iconType == IconTypeEnum.APP"
          :name="(route.meta.icon as string)"
          color=""
          :custom-style="{ marginRight: '5px' }"
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
        <span
          text="3.4"
          class="single-line-omitted"
          :style="baseStore.collapse ? '' : 'width: 100%'"
        >
          {{ route.meta?.menuName }}
        </span>
      </template>
    </el-menu-item>
    <el-sub-menu
      :index="route.path"
      :popper-class="`${baseStore.settings.MenuStyle} ${baseStore.settings.ColorScheme} layout-admin-menu`"
      v-else
    >
      <template #title>
        <svg-icon
          show-el-width
          size="1.1rem"
          v-if="route.meta?.icon && route.meta?.iconType == IconTypeEnum.APP"
          :name="(route.meta.icon as string)"
          color=""
          :custom-style="baseStore.collapse ? {} : { marginRight: '5px' }"
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
        <span
          text="3.4"
          class="single-line-omitted"
          :style="baseStore.collapse ? '' : 'width: 68%'"
        >
          {{ route.meta?.menuName }}
        </span>
      </template>
      <layout-admin-menu-item :routes="route.children"></layout-admin-menu-item>
    </el-sub-menu>
  </template>
</template>
