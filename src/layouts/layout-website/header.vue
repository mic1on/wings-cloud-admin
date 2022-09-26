<script lang="ts" setup>
import type { IObject } from '#/interface.d';
import {
  ActionAvatar,
  ActionLanguage,
  ActionNotifications,
  SwitchDarkLight,
  AppLogo,
} from '@/layouts/components';
import { RouteBaseEnum, RouteWebsiteEnum } from '@/enums/route';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const currentTab = ref<string>(route.path as string);
const tabs = ref<Array<IObject>>([
  {
    label: t('website.menu.home'),
    path: import.meta.env.APP_FIRST_ROUTE as string,
  },
  {
    label: t('website.menu.usage'),
    path: RouteWebsiteEnum.ROUTE_USAGE,
  },
  {
    label: t('website.menu.403'),
    path: RouteBaseEnum.ROUTE_NO_PERMISSION,
  },
  {
    label: t('website.menu.404'),
    path: RouteBaseEnum.ROUTE_NO_FOUND,
  },
]);
const tabChange = (item: IObject): void => {
  currentTab.value = item.path;
  router.push({ path: item.path });
};
</script>

<template>
  <div box-border w="100%" p="x-6" h-16>
    <div w-7xl ma h-full flex justify-between items-center>
      <app-logo></app-logo>
      <div h-full flex justify-end items-center>
        <div h-full flex items-center>
          <div
            h-full
            flex
            items-center
            mr-10
            cursor-pointer
            style="
              color: var(--ep-text-color-regular);
              font-size: var(--ep-font-size-base);
            "
            :style="{
              'font-size': 'var(--ep-font-size-base)',
              color:
                currentTab === item.path
                  ? 'var(--ep-color-primary)'
                  : 'var(--ep-text-color-regular)',
            }"
            v-for="(item, index) in tabs"
            :key="index"
            @click="tabChange(item, index)"
          >
            {{ item.label }}
          </div>
        </div>
        <switch-dark-light mr-8></switch-dark-light>
        <action-language mr-8 only-icon></action-language>
        <action-notifications mr-8></action-notifications>
        <action-avatar></action-avatar>
      </div>
    </div>
  </div>
</template>
