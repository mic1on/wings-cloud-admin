<script lang="ts" setup>
import { elementPlusConfig } from '@/plugins/element-plus';
import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { useStore } from '@/hooks/use-store';
import { getMobileAreaCodeList } from '@/apis/base';

const route = useRoute();

const { baseStore } = useStore();

const { t } = useI18n();

const { messages } = useI18n();

const locale =
  messages.value[baseStore.language][
    elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX
  ];

onBeforeMount(async () => {
  const { data } = await getMobileAreaCodeList();
  setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
});

watch(
  () => baseStore.appThemeSettings.colorScheme,
  () => {
    if (baseStore.appThemeSettings.colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <el-config-provider
    :locale="locale"
    :namespace="elementPlusConfig.ELEMENT_PLUS_CLASS_PREFIX"
    :button="elementPlusConfig.ELEMENT_PLUS_BUTTON_CONFIG"
    :message="elementPlusConfig.ELEMENT_PLUS_MESSAGE_CONFIG"
    :z-index="elementPlusConfig.ELEMENT_PLUS_Z_INDEX"
    :size="elementPlusConfig.ELEMENT_PLUS_SIZE"
  >
    <div
      class="global-loading"
      v-loading="true"
      absolute
      top-0
      left-0
      z-9999
      w-screen
      h-screen
      :element-loading-fullscreen="true"
      :element-loading-lock="true"
      :element-loading-text="t('base.loading')"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-if="baseStore.appLoading"
    ></div>
    <template v-else>
      <layout-base
        v-if="route.meta?.layout === '' || route.meta?.layout === 'base'"
      >
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-base>
      <layout-website v-if="route.meta?.layout === 'website'">
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-website>
      <layout-admin v-if="route.meta?.layout === 'admin'">
        <template #router-view>
          <slot name="app"></slot>
        </template>
      </layout-admin>
    </template>
  </el-config-provider>
</template>
