<script lang="ts" setup>
import type { IObject } from '@/global.d';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const currentTab = ref<string>(route.path as string);

const tabs = ref<Array<IObject>>([
  {
    label: t('website.menu.home'),
    path: import.meta.env.APP_FIRST_ROUTE as string,
    isRoute: true,
  },
  {
    label: t('website.menu.usage'),
    url: 'https://wings-vue-docs.netlify.app',
    isRoute: false,
  },
  {
    label: t('website.menu.admin'),
    path: import.meta.env.APP_ADMIN_FIRST_ROUTE as string,
    isRoute: true,
  },
]);

const tabChange = (item: IObject): void => {
  if (item.isRoute) {
    currentTab.value = item.path;
    router.push({ path: item.path });
  } else {
    window.open(item.url);
  }
};
</script>

<template>
  <div box-border w="100%" p="x-6" h-16>
    <div w-7xl ma h-full flex justify-between items-center>
      <layout-logo></layout-logo>
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
            @click="tabChange(item)"
          >
            {{ item.label }}
          </div>
        </div>
        <layout-action-dark-light mr-8></layout-action-dark-light>
        <layout-action-language mr-8 only-icon></layout-action-language>
        <layout-action-notifications mr-8></layout-action-notifications>
        <layout-action-avatar></layout-action-avatar>
      </div>
    </div>
  </div>
</template>
