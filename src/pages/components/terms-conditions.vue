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
    termsConditionsData.value = data;
  });
};
</script>

<template>
  <div w="100%" py-2 flex justify-center items-center>
    <span text-3 pr-2 style="color: var(--el-color-info-light-3)">{{
      t('pages.readAndAgree', { label: props.label })
    }}</span>
    <el-button important="p-0" link type="primary" @click="openDialog()">
      <span text-3>{{ t('pages.termsConditions') }}</span>
    </el-button>
  </div>
  <crud-dialog v-model="dialogVisible" :title="t('pages.termsConditions')">
    <template #content>
      <div v-dompurify-html="termsConditionsData"></div>
    </template>
  </crud-dialog>
</template>
