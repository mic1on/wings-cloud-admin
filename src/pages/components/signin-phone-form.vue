<script lang="ts" setup name="signin-phone-form">
import type { FormRules, FormInstance } from 'element-plus';
import type { LoginPhoneForm } from '../index.d';
import { StorageEnum, PhoneCodeTypeEnum } from '@/enums';
import { MOBILE_PHONE } from '@/utils/reg-exp';
import { getStorage } from '@/utils/storage';
import { useCountDown } from '@/hooks/use-count-down';

const { t } = useI18n();

const countDown = useCountDown();

const formRef = ref<FormInstance>();

const form = ref<LoginPhoneForm>({
  areaCode: '+86',
  phone: '',
  code: '',
  remember: false,
  type: 1,
});

const formRules = reactive<FormRules>({
  phone: [
    {
      required: true,
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
      required: true,
      message: t('crud.placeholder.enter', { label: t('crud.phone.codeText') }),
      trigger: 'change',
    },
    {
      type: 'number',
      min: 6,
      max: 6,
      message: t('crud.placeholder.formatIncorrect', {
        label: t('crud.phone.codeText'),
      }),
      trigger: 'blur',
    },
  ],
});

const mobileAreaCodeList = getStorage(StorageEnum.MOBILE_PHONE_AREA_CODE);
</script>
<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <el-form-item prop="phone">
      <el-input
        v-model.number="form.phone"
        autocomplete="off"
        :placeholder="t('crud.phone.phone')"
      >
        <template #prepend>
          <el-select v-model="form.areaCode" important="w-24">
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
    <el-form-item prop="code" mb-2>
      <el-input
        v-model.number="form.code"
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
                form.phone,
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
    <el-form-item mb-2>
      <el-button type="primary" w="100%">
        <span font-600>{{ t('signin.btn') }}</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>
