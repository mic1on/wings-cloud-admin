<script lang="ts" setup>
const { t } = useI18n();
</script>
<template>
  <div w-7xl ma mb-40>
    <div
      text-4
      lh-8
      font-600
      mb-12
      select-none
      text-center
      style="color: var(--el-text-color-placeholder)"
    >
      {{ t('website.home.applied') }}
    </div>
    <div
      class="list"
      filter-grayscale
      flex
      justify-center
      items-center
      flex-wrap
    >
      <div w-15>
        <img w-full src="@/assets/images/website/logo-yonyou.png" alt="" />
      </div>
      <div w-46>
        <img w-full src="@/assets/images/website/logo-apicloud.png" alt="" />
      </div>
      <div w-26>
        <img w-full src="@/assets/images/website/logo-haier.png" alt="" />
      </div>
      <div w-44>
        <img w-full src="@/assets/images/website/logo-elink.png" alt="" />
      </div>
      <div w-40>
        <img w-full src="@/assets/images/website/logo-hisense.png" alt="" />
      </div>
      <div w-30>
        <img w-full src="@/assets/images/website/logo-haier-2.png" alt="" />
      </div>
      <div w-38>
        <img w-full src="@/assets/images/website/logo-neusoft.png" alt="" />
      </div>
      <div w-34>
        <img w-full src="@/assets/images/website/logo-xinxiwang.png" alt="" />
      </div>
      <div w-38>
        <img w-full src="@/assets/images/website/logo-goer.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list > div {
  margin: 0 3rem 3rem;
}
</style>
