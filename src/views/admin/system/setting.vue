<script lang="ts" setup>
import type {
  DefaultSettingsLayout,
  DefaultSettingsColorScheme,
} from '@/global.d';
import { useStore } from '@/hooks/use-store';
import { setEpThemeColor } from '@/utils/theme';
import {
  PredefineColorSchemes,
  PredefineLayouts,
  PredefineToolbar,
  PredefineTabStyle,
  PredefineMenuStyle,
} from '@/settings';
import SettingColorScheme from './components/setting-color-scheme.vue';
import SettingThemeColor from './components/setting-theme-color.vue';
import SettingLayout from './components/setting-layout.vue';

const { t } = useI18n();

const { baseStore } = useStore();

const changeLayout = (val: DefaultSettingsLayout) => {
  baseStore.settings.Layout = val;
};

const changeColorScheme = (val: DefaultSettingsColorScheme): void => {
  baseStore.settings.ColorScheme = val;
};

const changeThemeColor = (val: string): void => {
  baseStore.settings.ThemeColor = val;
  setEpThemeColor(val as string);
};

const toolbarChange = (key: string): void => {
  baseStore.settings.Toolbar[key] = !baseStore.settings.Toolbar[key];
};
</script>
<template>
  <crud-card
    action
    :title="t('admin.system.settingTitle')"
    :sub-title="t('admin.system.settingSubTitle')"
    :action-submit-label="t('base.crud.update')"
  >
    <div text-4 m-b-4>{{ t('admin.system.layout') }}</div>
    <div flex items-center flex-wrap m-b-6>
      <setting-layout
        v-for="(item, index) in PredefineLayouts"
        :mode="item.value"
        :name="item.label"
        :key="index"
        :active="baseStore.settings.Layout === item.value"
        @click="changeLayout(item.value as DefaultSettingsLayout)"
      ></setting-layout>
    </div>
    <div text-4 m-b-4>{{ t('admin.system.colorScheme') }}</div>
    <div flex items-center flex-wrap m-b-6>
      <setting-color-scheme
        v-for="(item, index) in PredefineColorSchemes"
        :mode="item.value"
        :name="item.label"
        :key="index"
        :active="baseStore.settings.ColorScheme === item.value"
        @click="changeColorScheme(item.value as DefaultSettingsColorScheme)"
      ></setting-color-scheme>
    </div>
    <div text-4 m-b-4>{{ t('admin.system.themeColor') }}</div>
    <div flex items-center flex-wrap m-b-6>
      <setting-theme-color @change="changeThemeColor"></setting-theme-color>
    </div>
    <div text-4 m-b-4>{{ t('admin.system.tabStyle') }}</div>
    <el-radio-group m-b-6 v-model="baseStore.settings.TabStyle">
      <el-radio-button
        :label="item.value"
        v-for="(item, index) in PredefineTabStyle"
        :key="index"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
    <div text-4 m-b-4>{{ t('admin.system.menuStyle') }}</div>
    <el-radio-group m-b-6 v-model="baseStore.settings.MenuStyle">
      <el-radio-button
        :label="item.value"
        v-for="(item, index) in PredefineMenuStyle"
        :key="index"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
    <div text-4 m-b-4>{{ t('admin.system.toolbar') }}</div>
    <div flex items-center flex-wrap m-b-6>
      <el-check-tag
        v-for="(item, index) in PredefineToolbar"
        :key="index"
        mr-6
        mb-2
        :checked="baseStore.settings.Toolbar[item.value]"
        @change="toolbarChange(item.value)"
      >
        {{ item.label }}
      </el-check-tag>
    </div>
    <div text-4 m-b-4>{{ t('admin.system.componentSize') }}</div>
    <el-radio-group m-b-6 v-model="baseStore.settings.ElementPlus.size">
      <el-radio-button label="large">{{ t('base.large') }}</el-radio-button>
      <el-radio-button label="default">{{ t('base.default') }}</el-radio-button>
      <el-radio-button label="small">{{ t('base.small') }}</el-radio-button>
    </el-radio-group>
    <div text-4 m-b-4>{{ t('admin.system.other') }}</div>
    <crud-form
      form-position="left"
      :action="false"
      label-width="240px"
      label-position="left"
    >
      <el-form-item :label="t('admin.system.tab')">
        <el-switch v-model="baseStore.settings.Tab" />
      </el-form-item>
      <el-form-item :label="t('admin.system.uniqueOpened')">
        <el-switch v-model="baseStore.settings.UniqueOpened" />
      </el-form-item>
    </crud-form>
  </crud-card>
</template>
