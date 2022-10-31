<script lang="ts" setup name="layout-website-header">
import type { IObject } from '@/global.d';
import { DefaultSettings } from '@/settings';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const currentTab = ref<string>(route.path as string);

const tabs = ref<Array<IObject>>([
  {
    label: t('website.menu.home'),
    path: DefaultSettings.FirstRoute,
    isRoute: true,
  },
  {
    label: t('website.menu.usage'),
    url: 'https://wings-vue-docs.netlify.app',
    isRoute: false,
  },
  {
    label: t('website.menu.admin'),
    path: DefaultSettings.AdminFirstRoute,
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
      <layout-website-logo></layout-website-logo>
      <div h-full flex justify-end items-center>
        <div h-full flex items-center>
          <div
            h-full
            flex
            items-center
            mr-10
            cursor-pointer
            style="
              color: var(--el-text-color-regular);
              font-size: var(--el-font-size-base);
            "
            :style="{
              'font-size': 'var(--el-font-size-base)',
              color:
                currentTab === item.path
                  ? 'var(--el-color-primary)'
                  : 'var(--el-text-color-regular)',
            }"
            v-for="(item, index) in tabs"
            :key="index"
            @click="tabChange(item)"
          >
            {{ item.label }}
          </div>
        </div>
        <layout-action-color-scheme
          mr-8
          color="var(--el-text-color-primary)"
        ></layout-action-color-scheme>
        <layout-action-language
          mr-8
          only-icon
          color="var(--el-text-color-primary)"
        ></layout-action-language>
        <layout-action-notification
          mr-8
          color="var(--el-text-color-primary)"
        ></layout-action-notification>
        <layout-action-avatar></layout-action-avatar>
      </div>
    </div>
  </div>
</template>
