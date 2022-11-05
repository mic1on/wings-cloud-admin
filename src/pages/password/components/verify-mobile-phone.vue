<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';
import type { PhoneForm } from '@/pages/index.d';
import type { IObject } from '@/global.d';
import { StorageEnum, PhoneCodeTypeEnum } from '@/enums';
import { useCountDown } from '@/hooks/use-count-down';
import { MOBILE_PHONE } from '@/utils/reg-exp';
import { getStorage } from '@/utils/storage';

const { t } = useI18n();

const countDown = useCountDown();

const verifyFormRef = ref<FormInstance>();

const verifyForm = ref<PhoneForm>({
  areaCode: '+86',
  phone: '',
  code: '',
});

const verifyFormRules = reactive<FormRules>({
  phone: [
    {
      required: false,
      message: t('crud.placeholder.enter', {
        label: t('crud.phone.phoneText'),
      }),
      trigger: 'change',
    },
    {
      pattern: MOBILE_PHONE,
      message: t('crud.placeholder.formatIncorrect', {
        label: t('crud.phone.phoneText'),
      }),
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: verifyForm.value.phone ? true : false,
      message: t('crud.placeholder.enter', { label: t('crud.phone.code') }),
      trigger: 'change',
    },
    {
      len: 6,
      message: t('crud.placeholder.formatIncorrect', {
        label: t('crud.phone.code'),
      }),
      trigger: 'blur',
    },
  ],
});

const mobileAreaCodeList = getStorage(StorageEnum.MOBILE_PHONE_AREA_CODE);

const emit = defineEmits(['verify']);

const verify = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) return;
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      emit('verify', { status: true } as IObject);
    } else {
      emit('verify', { status: false } as IObject);
    }
  });
};
</script>

<template>
  <el-form
    ref="verifyFormRef"
    :model="verifyForm"
    :rules="verifyFormRules"
    size="large"
  >
    <el-form-item prop="phone">
      <el-input
        v-model.number="verifyForm.phone"
        autocomplete="off"
        :placeholder="t('crud.phone.phone')"
      >
        <template #prepend>
          <el-select v-model="verifyForm.areaCode" important="w-24">
            <el-option
              v-for="(item, index) in mobileAreaCodeList"
              :key="index"
              :label="item.code"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </template>
        <template #prefix>
          <el-icon><Iphone /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code" v-show="verifyForm.phone">
      <el-input
        v-model.number="verifyForm.code"
        autocomplete="off"
        :placeholder="t('crud.phone.code')"
      >
        <template #prefix>
          <el-icon><ChatDotSquare /></el-icon>
        </template>
        <template #suffix>
          <el-button
            inline-block
            p-0
            link
            type="primary"
            :disabled="countDown.countDownForm.getting"
            @click="
              countDown.getPhoneCode(
                verifyForm.phone,
                PhoneCodeTypeEnum.FORGET_PASSWORDS
              )
            "
          >
            <span text-3 v-if="countDown.countDownForm.getting">
              {{
                t('crud.phone.retrieve', {
                  time: countDown.countDownForm.time,
                })
              }}
            </span>
            <span text-3 v-else>
              {{
                countDown.countDownForm.send
                  ? t('crud.phone.resend')
                  : t('crud.phone.send')
              }}
            </span>
          </el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" w="100%" @click="verify(verifyFormRef)">
        <span font-600> {{ t('password.verify') }}</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>
