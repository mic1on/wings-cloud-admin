<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';
import type { LoginPhoneForm } from '#/views/website/user.d';
import { ElMessage } from 'element-plus';
import {
  StorageEnum,
  PhoneCodeTypeEnum,
  useWingsCountDown,
  useWingsApis,
  MOBILE_PHONE,
  getStorage,
} from '@wings';

const { t } = useI18n();

const { apis } = useWingsApis();

const countDown = useWingsCountDown();

const formRef = ref<FormInstance>();

const form = ref<LoginPhoneForm>({
  areaCode: import.meta.env.APP_MOBILE_AREA_CODE,
  phone: '',
  code: '',
  remember: false,
  type: 1,
});

const formRules = reactive<FormRules>({
  phone: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.mobilePhoneText') }),
      trigger: 'change',
    },
    {
      pattern: MOBILE_PHONE,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.mobilePhoneText'),
      }),
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: true,
      message: t('base.form.enter', { label: t('base.form.securityCode') }),
      trigger: 'change',
    },
    {
      type: 'number',
      min: 6,
      max: 6,
      message: t('base.form.formatIncorrect', {
        label: t('base.form.securityCode'),
      }),
      trigger: 'blur',
    },
  ],
});

const mobileAreaCodeList = getStorage(StorageEnum.MOBILE_PHONE_AREA_CODE);

const getPhoneCode = (): void => {
  countDown.getCode(form.value.phone, async () => {
    const res = await apis.base.getPhoneCode({
      phone: form.value.phone,
      type: PhoneCodeTypeEnum.LOGIN,
    });
    if (res.code === 0) {
      ElMessage.success(t('base.form.sendSuccess'));
      countDown.getCoding();
    }
  });
};
</script>
<template>
  <el-form ref="formRef" :model="form" :rules="formRules" size="large">
    <div mb-8>
      <div mb-4 text-8 font-600 style="color: var(--ep-color-info-light)">
        {{ t('website.user.phoneLoginTitle') }}
      </div>
      <div text-3 pr-2 style="color: var(--ep-color-info-light-3)">
        {{ t('website.user.phoneLoginAndSignup') }}
      </div>
    </div>
    <el-form-item prop="phone">
      <el-input
        v-model.number="form.phone"
        autocomplete="off"
        :placeholder="
          t('base.form.enter', { label: t('base.form.mobilePhoneText') })
        "
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
        :placeholder="
          t('base.form.enter', { label: t('base.form.securityCodeText') })
        "
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
            :disabled="countDown.form.getting"
            @click="getPhoneCode()"
          >
            <span text-3 v-if="countDown.form.getting">
              {{
                t('base.form.countDownTimeLabel', {
                  time: countDown.form.time,
                })
              }}
            </span>
            <span text-3 v-else>
              {{
                countDown.form.send
                  ? t('base.form.resend')
                  : t('base.form.getSecurityCode')
              }}
            </span>
          </el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item mb-2>
      <div w="100%" flex justify-between items-center>
        <el-checkbox
          inline-block
          text-4
          style="color: var(--ep-color-info-light-3)"
          v-model="form.remember"
          :label="t('website.user.rememberMe')"
        ></el-checkbox>
      </div>
    </el-form-item>
    <el-form-item mb-2>
      <el-button type="primary" w="100%">{{
        t('base.form.loginOrSignup')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
