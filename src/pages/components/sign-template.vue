<script lang="ts" setup name="sign-template">
const { t } = useI18n();
</script>
<template>
  <div w-screen h-screen flex items-center justify-between>
    <div
      w="30%"
      h-full
      relative
      style="background-color: #f75151"
      p-20
      box-border
      flex
      flex-wrap
      content-between
      color-white
    >
      <div>
        <div mb-14 text-7 font-600 flex items-center>
          <img mr-4 w-8 h-8 src="@/assets/svgs/logo-white.svg" />
          <span>{{ t('app.name') }}</span>
        </div>
        <div text-9 font-400>{{ t('app.subName') }}</div>
      </div>
      <div text-2 font-300>{{ t('app.copyright') }}</div>
    </div>
    <div w="70%" h-full flex items-center justify-center relative>
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
</template>
