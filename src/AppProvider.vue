<script lang="ts" setup>
import useBase from '@/hooks/base';
import LayoutBase from '@/layouts/layout-base/index.vue';
import LayoutAdmin from '@/layouts/layout-admin/index.vue';
import LayoutWebsite from '@/layouts/layout-website/index.vue';
import { elementPlusConfig } from '@/plugins/element-plus';

const route = useRoute();

const { appStore, init } = useBase();

const { t } = useI18n();
const { messages } = useI18n();
const locale =
  messages.value[appStore.language][
    elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX
  ];

onBeforeMount(async () => {
  init();
});
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
      v-if="appStore.globalLoading"
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
