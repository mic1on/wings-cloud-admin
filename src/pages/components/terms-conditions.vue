<script lang="ts" setup>
import type { ResponseData } from '@/utils/request/index.d';
import { getTermsConditionsData } from '@/apis/base';

const { t } = useI18n();

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
});

const dialogVisible = ref<boolean>(false);

const termsConditionsData = ref<string>('');

const openDialog = (): void => {
  dialogVisible.value = true;
  getTermsConditionsData().then(({ data }: ResponseData) => {
    termsConditionsData.value = data.i18nKey ? t(data.i18nKey) : '';
  });
};
</script>

<template>
  <div
    w="100%"
    box-border
    py-2
    flex
    justify-center
    items-center
    style="font-size: 14px"
  >
    <span pr-2 style="color: var(--el-color-info-light-3)">{{
      t('signin.readAndAgree', { label: props.label })
    }}</span>
    <el-button important="p-0" link type="primary" @click="openDialog()">
      <span>{{ t('signin.termsConditions') }}</span>
    </el-button>
  </div>
  <crud-dialog v-model="dialogVisible" :title="t('signin.termsConditions')">
    <template #content>
      <div v-dompurify-html="termsConditionsData"></div>
    </template>
  </crud-dialog>
</template>
