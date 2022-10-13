<script lang="ts" setup>
const { t } = useI18n();

const router = useRouter();

const goHome = () => {
  router.replace({ path: import.meta.env.APP_FIRST_ROUTE });
};
</script>

<template>
  <div
    h-screen
    :style="{
      background:
        'linear-gradient(180deg,rgba(148, 153, 221, 0.1) 0%,rgba(0, 16, 255, 0.1) 100%)',
    }"
  ></div>
  <div
    fixed
    top="48%"
    left="50%"
    translate-x="-50%"
    translate-y="-50%"
    w-7xl
    text-center
  >
    <img cursor-pointer h-22 my-10 src="@/assets/svgs/logo.svg" />
    <div text-12 mb-6 font-600 style="color: var(--ep-color-info-dark)">
      {{ t('base.notFound') }}
    </div>
    <div text-4 mb-12 style="color: var(--ep-color-info)">
      {{ t('base.notFoundDescription') }}
    </div>
    <div text-center>
      <el-button
        important="h-12 p-x-6 text-4 font-600"
        type="primary"
        @click="goHome"
        >{{ t('base.homeButton') }}</el-button
      >
    </div>
  </div>
</template>
