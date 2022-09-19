<script lang="ts" setup>
const { t } = useI18n();
</script>
<template>
  <div mb-10>
    <div
      mb-4
      text-8
      text-center
      font-600
      style="color: var(--ep-color-info-light)"
    >
      {{ t('website.user.alipayLoginTitle') }}
    </div>
    <div text-3 pr-2 text-center style="color: var(--ep-color-info-light-3)">
      {{ t('website.user.alipayLoginDescription') }}
    </div>
  </div>
  <el-card w="60%" ma shadow="never">
    <img w-full src="@/assets/qr-code.png" alt="" />
  </el-card>
  <div p-y-6 text-center>
    <el-button link type="primary">{{
      t('base.form.qrcodeNotShow')
    }}</el-button>
  </div>
</template>
