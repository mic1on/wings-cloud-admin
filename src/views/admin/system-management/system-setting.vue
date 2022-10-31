<script lang="ts" setup>
import type {
  DefaultSettingsLayout,
  DefaultSettingsColorScheme,
} from '@/global.d';
import { useStore } from '@/hooks/use-store';
import { useLanguage } from '@/hooks/use-language';
import { setEpThemeColor } from '@/utils/theme';
import {
  PredefineColorSchemes,
  PredefineLayouts,
  PredefineToolbar,
  PredefineTabStyle,
  PredefineMenuStyle,
  PredefineCopyrightPosition,
  PredefineBreadcrumbPosition,
  PredefineLoginType,
} from '@/settings';
import { SettingsValueEnum } from '@/enums';
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

const { languages } = useLanguage();
</script>
<template>
  <crud-card
    action
    :title="t('admin.systemManagement.systemSetting.menuName')"
    :sub-title="t('admin.systemManagement.systemSetting.menuDescription')"
    :action-submit-label="t('base.crud.update')"
  >
    <div text-4 m-b-4>
      {{ t('admin.systemManagement.systemSetting.layout') }}
    </div>
    <div flex items-center flex-wrap m-b-6>
      <div v-for="(item, index) in PredefineLayouts" :key="index">
        <el-tooltip
          :show-after="300"
          effect="dark"
          :content="item.label"
          placement="top"
        >
          <setting-layout
            :mode="item.value"
            :name="item.label"
            :active="baseStore.settings.Layout === item.value"
            @click="changeLayout(item.value as DefaultSettingsLayout)"
          ></setting-layout>
        </el-tooltip>
      </div>
    </div>
    <div text-4 m-b-4>
      {{ t('admin.systemManagement.systemSetting.colorScheme') }}
    </div>
    <div flex items-center flex-wrap m-b-6>
      <div v-for="(item, index) in PredefineColorSchemes" :key="index">
        <el-tooltip
          :show-after="300"
          effect="dark"
          :content="item.label"
          placement="top"
        >
          <setting-color-scheme
            :mode="item.value"
            :name="item.label"
            :active="baseStore.settings.ColorScheme === item.value"
            @click="changeColorScheme(item.value as DefaultSettingsColorScheme)"
          ></setting-color-scheme>
        </el-tooltip>
      </div>
    </div>
    <div text-4 m-b-4>
      {{ t('admin.systemManagement.systemSetting.themeColor') }}
    </div>
    <div flex items-center flex-wrap m-b-6>
      <setting-theme-color @change="changeThemeColor"></setting-theme-color>
    </div>
    <div text-4 m-b-4>
      {{ t('admin.systemManagement.systemSetting.toolbar') }}
    </div>
    <div flex items-center flex-wrap m-b-6>
      <el-check-tag
        v-for="(item, index) in PredefineToolbar"
        :key="index"
        mr-6
        mb-2
        :checked="baseStore.settings.Toolbar[item.value]"
        @change="toolbarChange(item.value)"
      >
        {{ t(item.label) }}
      </el-check-tag>
    </div>
    <div text-4 m-b-4>
      {{ t('admin.systemManagement.systemSetting.component') }}
    </div>
    <el-form
      :style="{ width: '100%' }"
      label-width="240px"
      label-position="left"
      m-b-6
    >
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.componentSize')"
      >
        <el-radio-group v-model="baseStore.settings.ElementPlus.size">
          <el-radio-button label="large">{{ t('base.large') }}</el-radio-button>
          <el-radio-button label="default">{{
            t('base.default')
          }}</el-radio-button>
          <el-radio-button label="small">{{ t('base.small') }}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.menuStyle')"
      >
        <el-radio-group v-model="baseStore.settings.MenuStyle">
          <el-radio-button
            :label="item.value"
            v-for="(item, index) in PredefineMenuStyle"
            :key="index"
          >
            {{ t(item.label) }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.uniqueOpened')"
      >
        <el-switch v-model="baseStore.settings.UniqueOpened" />
      </el-form-item>
      <el-form-item :label="t('admin.systemManagement.systemSetting.tab')">
        <el-switch v-model="baseStore.settings.Tab" />
      </el-form-item>
      <el-form-item :label="t('admin.systemManagement.systemSetting.tabStyle')">
        <el-radio-group v-model="baseStore.settings.TabStyle">
          <el-radio-button
            :label="item.value"
            v-for="(item, index) in PredefineTabStyle"
            :key="index"
          >
            {{ t(item.label) }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.breadcrumb')"
      >
        <el-radio-group v-model="baseStore.settings.Breadcrumb">
          <el-radio-button
            :disabled="
              baseStore.settings.Layout === SettingsValueEnum.LAYOUT_TOP_LEAN &&
              item.value === SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER
            "
            :label="item.value"
            v-for="(item, index) in PredefineBreadcrumbPosition"
            :key="index"
          >
            {{ t(item.label) }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.copyright')"
      >
        <el-radio-group v-model="baseStore.settings.Copyright">
          <el-radio-button
            :label="item.value"
            v-for="(item, index) in PredefineCopyrightPosition"
            :key="index"
          >
            {{ t(item.label) }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div text-4 m-b-4>
      {{ t('admin.systemManagement.systemSetting.other') }}
    </div>
    <el-form
      :style="{ width: '100%' }"
      label-width="240px"
      label-position="left"
      m-b-6
    >
      <el-form-item :label="t('admin.systemManagement.systemSetting.language')">
        <el-select style="width: 260px" v-model="baseStore.settings.Language">
          <el-option
            v-for="(value, key) in languages"
            :key="key"
            :label="value.name"
            :value="key"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.firstRoute')"
      >
        <el-input
          style="width: 260px"
          v-model="baseStore.settings.FirstRoute"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.adminFirstRoute')"
      >
        <el-input
          style="width: 260px"
          v-model="baseStore.settings.AdminFirstRoute"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="t('admin.systemManagement.systemSetting.loginType')"
      >
        <el-select style="width: 260px" v-model="baseStore.settings.LoginType">
          <el-option
            v-for="(item, index) in PredefineLoginType"
            :key="index"
            :label="t(item.label)"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </crud-card>
</template>
