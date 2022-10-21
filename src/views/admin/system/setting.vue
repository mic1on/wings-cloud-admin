<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';
import { setEpThemeColor } from '@/utils/theme';
import {
  PredefineThemeColors,
  PredefineColorSchemes,
  PredefineLayouts,
} from '@/settings';
import SettingLayout from './components/setting-layout.vue';

const { t } = useI18n();

const { baseStore } = useStore();

const _predefineThemeColors = ref([]);
PredefineThemeColors.map((item) => {
  _predefineThemeColors.value.push(item.value);
});

const changeThemeColor = (val: string | null): void => {
  if (!val) return;
  baseStore.themeSettings.themeColor = val;
  setEpThemeColor(val as string);
};

const changeLayout = (val: string): void => {
  baseStore.layout = val;
};
</script>
<template>
  <crud-card :title="t('admin.system.settingTitle')" action>
    <crud-form
      form-width="100%"
      form-position="left"
      label-width="180px"
      label-position="left"
      :action="false"
    >
      <el-form-item :label="t('admin.system.layout')">
        <setting-layout
          v-for="(item, index) in PredefineLayouts"
          :mode="item.value"
          :name="item.label"
          :key="index"
          :active="baseStore.layout === item.value"
          @click="changeLayout(item.value)"
        ></setting-layout>
      </el-form-item>
      <el-form-item :label="t('admin.system.colorScheme')">
        <el-radio-group v-model="baseStore.themeSettings.colorScheme">
          <el-radio-button
            v-for="(item, index) in PredefineColorSchemes"
            :key="index"
            :label="item.value"
          >
            {{ item.label }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="t('admin.system.customThemeColor')">
        <el-color-picker
          v-model="baseStore.themeSettings.themeColor"
          @change="changeThemeColor"
          :predefine="_predefineThemeColors"
        />
      </el-form-item>
      <el-form-item :label="t('admin.system.predefineThemeColor')">
        <div
          w-26
          h-12
          mr-10
          cursor-pointer
          :style="
            baseStore.themeSettings.themeColor === item
              ? 'box-shadow: 0 0 8px 2px #00000026'
              : ''
          "
          v-for="(item, index) in PredefineThemeColors"
          :key="index"
          @click="changeThemeColor(item.value)"
        >
          <div
            w-full
            h-full
            color-white
            flex
            items-center
            justify-center
            text-3
            :style="{ backgroundColor: item.value, borderRadius: '4px' }"
          >
            {{
              baseStore.themeSettings.themeColor === item.value
                ? t('base.crud.selected')
                : item.value
            }}
          </div>
        </div>
      </el-form-item>
      <el-form-item :label="t('admin.system.refreshTool')">
        <el-switch v-model="baseStore.toolbarSettings.dark" />
      </el-form-item>
      <el-form-item :label="t('admin.system.languagesTool')">
        <el-switch v-model="baseStore.toolbarSettings.language" />
      </el-form-item>
      <el-form-item :label="t('admin.system.refreshTool')">
        <el-switch v-model="baseStore.toolbarSettings.refresh" />
      </el-form-item>
      <el-form-item :label="t('admin.system.refreshTool')">
        <el-switch v-model="baseStore.toolbarSettings.notification" />
      </el-form-item>
      <el-form-item :label="t('admin.system.fullscreenTool')">
        <el-switch v-model="baseStore.toolbarSettings.fullscreen" />
      </el-form-item>
      <el-form-item :label="t('admin.system.settingTool')">
        <el-switch v-model="baseStore.toolbarSettings.setting" />
      </el-form-item>
    </crud-form>
  </crud-card>
</template>
