<script lang="ts" setup name="sign-template">
import { useStore } from '@/hooks/use-store';

const { t } = useI18n();

const { baseStore } = useStore();
</script>
<template>
  <div>
    <div w-screen h-screen overflow-hidden v-if="baseStore.isMobile">
      <div w-full h-full box-border p-x-6 relative>
        <div absolute top-8 left-6>
          <layout-toolbar-language></layout-toolbar-language>
        </div>
        <div absolute top-8 right-6>
          <slot name="top-right"></slot>
        </div>
        <div
          w-full
          h-full
          flex
          flex-wrap
          items-center
          justify-center
          content-center
        >
          <div w-full m-b-8>
            <slot name="title"></slot>
          </div>
          <div w-full>
            <slot name="form"></slot>
          </div>
        </div>
        <div w-full absolute bottom-8 right="50%" translate-x="50%">
          <slot name="bottom-center"></slot>
        </div>
      </div>
    </div>
    <div v-else w-screen h-screen flex items-center justify-between>
      <div
        w="30%"
        h-full
        relative
        p-16
        box-border
        flex
        flex-wrap
        content-between
        color-white
        style="background-color: var(--el-color-primary)"
      >
        <div>
          <div mb-14 text-7 font-600 flex items-center>
            <img mr-4 w-9 h-9 src="@/assets/svgs/logo-white.svg" />
            <span>{{ t('app.name') }}</span>
          </div>
          <div text-8 font-400>{{ t('app.subName') }}</div>
        </div>
        <div style="font-size: 14px" font-300>{{ t('app.copyright') }}</div>
      </div>
      <div w="70%" h-full flex items-center justify-center relative>
        <div absolute top-8 left-10>
          <layout-toolbar-language></layout-toolbar-language>
        </div>
        <div absolute top-8 right-10>
          <slot name="top-right"></slot>
        </div>
        <div w-sm>
          <div m-b-8>
            <slot name="title"></slot>
          </div>
          <slot name="form"></slot>
        </div>
        <div absolute bottom-8 right="50%" translate-x="50%">
          <slot name="bottom-center"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
