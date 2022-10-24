<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';
import { setEpThemeColor } from '@/utils/theme';
import {
  PredefineColorSchemes,
  PredefineLayouts,
  ToolbarSettings,
} from '@/settings';
import SettingColorScheme from './components/setting-color-scheme.vue';
import SettingThemeColor from './components/setting-theme-color.vue';
import SettingLayout from './components/setting-layout.vue';

const { t } = useI18n();

const { baseStore } = useStore();

const changeLayout = (val: string): void => {
  baseStore.layout = val;
};

const changeColorScheme = (val: string): void => {
  baseStore.themeSettings.colorScheme = val;
};

const changeThemeColor = (val: string): void => {
  baseStore.themeSettings.themeColor = val;
  setEpThemeColor(val as string);
};

const toolbarChange = (key: string): void => {
  baseStore.toolbarSettings[key] = !baseStore.toolbarSettings[key];
};
</script>
<template>
  <crud-card :title="t('admin.system.settingTitle')" action>
    <div text-4 m-y-8>{{ t('admin.system.layout') }}</div>
    <div flex items-center flex-wrap>
      <setting-layout
        v-for="(item, index) in PredefineLayouts"
        :mode="item.value"
        :name="item.label"
        :key="index"
        :active="baseStore.layout === item.value"
        @click="changeLayout(item.value)"
      ></setting-layout>
    </div>
    <div text-4 m-y-8>{{ t('admin.system.colorScheme') }}</div>
    <div flex items-center flex-wrap>
      <setting-color-scheme
        v-for="(item, index) in PredefineColorSchemes"
        :mode="item.value"
        :name="item.label"
        :key="index"
        :active="baseStore.themeSettings.colorScheme === item.value"
        @click="changeColorScheme(item.value)"
      ></setting-color-scheme>
    </div>
    <div text-4 m-y-8>{{ t('admin.system.themeColor') }}</div>
    <div flex items-center flex-wrap>
      <setting-theme-color @change="changeThemeColor"></setting-theme-color>
    </div>
    <div text-4 m-y-8>{{ t('admin.system.toolbar') }}</div>
    <div flex items-center flex-wrap>
      <el-check-tag
        v-for="(value, key) in ToolbarSettings"
        :key="key"
        mr-6
        mb-2
        :checked="baseStore.toolbarSettings[key]"
        @change="toolbarChange(key)"
      >
        <span v-if="key == 'dark'">
          {{ t('admin.system.toolbarDark') }}
        </span>
        <span v-if="key == 'language'">
          {{ t('admin.system.toolbarLanguage') }}
        </span>
        <span v-if="key == 'refresh'">
          {{ t('admin.system.toolbarRefresh') }}
        </span>
        <span v-if="key == 'notification'">
          {{ t('admin.system.toolbarNotification') }}
        </span>
        <span v-if="key == 'fullscreen'">
          {{ t('admin.system.toolabarFullscreen') }}
        </span>
        <span v-if="key == 'setting'">
          {{ t('admin.system.toolbarSetting') }}
        </span>
        <span v-if="key == 'avatar'">
          {{ t('admin.system.toolbarAvatar') }}
        </span>
      </el-check-tag>
    </div>
    <div text-4 m-y-8>{{ t('admin.system.componentSize') }}</div>
    <el-radio-group v-model="baseStore.elementPlusSize">
      <el-radio-button label="large">Large</el-radio-button>
      <el-radio-button label="default">Default</el-radio-button>
      <el-radio-button label="small">Small</el-radio-button>
    </el-radio-group>
    <div text-4 m-y-8>{{ t('admin.system.other') }}</div>
    <crud-form
      form-position="left"
      :action="false"
      label-width="240px"
      label-position="left"
    >
      <el-form-item :label="t('admin.system.tab')">
        <el-switch v-model="baseStore.showTab" />
      </el-form-item>
      <el-form-item :label="t('admin.system.uniqueOpened')">
        <el-switch v-model="baseStore.uniqueOpened" />
      </el-form-item>
    </crud-form>
  </crud-card>
</template>
