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

const changeThemeColor = (val: string | null): void => {
  if (!val) return;
  baseStore.appThemeSettings.themeColor = val;
  setEpThemeColor(val as string);
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
          :key="index"
        ></setting-layout>
      </el-form-item>
      <el-form-item :label="t('admin.system.colorScheme')">
        <el-radio-group v-model="baseStore.appThemeSettings.colorScheme">
          <el-radio-button
            v-for="(item, index) in PredefineColorSchemes"
            :key="index"
            :label="item.value"
            >{{ item.label }}</el-radio-button
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="t('admin.system.customThemeColor')">
        <el-color-picker
          v-model="baseStore.appThemeSettings.themeColor"
          @change="changeThemeColor"
          :predefine="PredefineThemeColors"
        />
      </el-form-item>
      <el-form-item :label="t('admin.system.predefineThemeColor')">
        <div
          w-26
          h-12
          mr-10
          cursor-pointer
          v-for="(item, index) in PredefineThemeColors"
          :key="index"
          @click="changeThemeColor(item)"
        >
          <div
            w-full
            h-full
            color-white
            flex
            items-center
            justify-center
            text-3
            :style="{ backgroundColor: item, borderRadius: '4px' }"
          >
            {{
              baseStore.appThemeSettings.themeColor === item
                ? t('base.crud.selected')
                : item
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
        <el-switch v-model="baseStore.toolbarSettings.notifications" />
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
