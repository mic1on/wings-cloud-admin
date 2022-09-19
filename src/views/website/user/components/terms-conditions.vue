<script lang="ts" setup>
import type { ResponseData } from '#/app/app-request.d';
import useAppApi from '@/hooks/app-api';

const { apis } = useAppApi();

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
  apis.base.getTermsConditionsData().then(({ data }: ResponseData) => {
    termsConditionsData.value = data;
  });
};
</script>

<template>
  <div w="100%" py-2 flex justify-center items-center>
    <span text-3 pr-2 style="color: var(--ep-color-info-light-3)">{{
      t('website.user.agreeLabel', { label: props.label })
    }}</span>
    <el-button important="p-0" link type="primary" @click="openDialog()">
      <span text-3>{{ t('website.user.termsConditions') }}</span>
    </el-button>
  </div>
  <app-dialog
    v-model="dialogVisible"
    :title="t('website.user.termsConditions')"
  >
    <template #content>
      <div v-dompurify-html="termsConditionsData"></div>
    </template>
  </app-dialog>
</template>
