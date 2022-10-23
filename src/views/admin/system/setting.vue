<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';
import { setEpThemeColor } from '@/utils/theme';
import {
  PredefineThemeColors,
  PredefineColorSchemes,
  PredefineLayouts,
} from '@/settings';
import SettingLayout from './components/setting-layout.vue';
import ActiveSelect from './components/active-select.vue';

const { t } = useI18n();

const { baseStore } = useStore();

const _predefineThemeColors = ref<Array<string>>([]);
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
      <el-form-item :label="t('admin.system.themeColor')">
        <div
          w-22
          mr-4
          cursor-pointer
          v-for="(item, index) in PredefineThemeColors"
          :key="index"
          @click="changeThemeColor(item.value)"
        >
          <div
            w-12
            h-12
            color-white
            flex
            items-center
            justify-center
            text-3
            :style="{
              backgroundColor: item.value,
              borderRadius: '4px',
              margin: '0 auto',
            }"
          >
          </div>
          <active-select
            :active="item.value == baseStore.themeSettings.themeColor"
            :label="item.label"
          ></active-select>
        </div>
        <div w-22>
          <div flex items-center justify-center>
            <el-color-picker
              important="w-12 h-12"
              v-model="baseStore.themeSettings.themeColor"
              @change="changeThemeColor"
              :predefine="_predefineThemeColors"
            />
          </div>
          <active-select
            :active="
              PredefineThemeColors.filter(
                (item) => item.value == baseStore.themeSettings.themeColor
              ).length == 0
            "
            :label="t('base.custom')"
          ></active-select>
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

<style lang="scss" scoped>
:deep(.el-color-picker__trigger) {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
}
</style>
