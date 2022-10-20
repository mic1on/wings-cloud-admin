<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';
import { setThemeColor } from '@/utils/theme';
import { PredefineThemeColors } from '@/settings';

const { t } = useI18n();

const { baseStore } = useStore();

const themeColor = ref(baseStore.appThemeSettings.themeColor);

const predefineColors = ref(PredefineThemeColors);

const changeThemeColor = (val: string | null): void => {
  if (!val) return;
  themeColor.value = val;
  setThemeColor(val as string);
};
</script>
<template>
  <crud-card :title="t('admin.system.settingTitle')">
    <crud-form
      form-width="100%"
      form-position="left"
      label-width="240px"
      label-position="left"
    >
      <div flex flex-wrap>
        <div w="360px" mr-30>
          <div mb-8 style="color: var(--el-text-color-primary)">
            {{ t('admin.system.layout') }}
          </div>
          <div flex flex-wrap justify-between items-center></div>
        </div>
        <div w="360px" mr-30>
          <div mb-8 style="color: var(--el-text-color-primary)">
            {{ t('admin.system.theme') }}
          </div>
          <div flex flex-wrap justify-between items-center>
            <div
              w-26
              h-12
              mb-4
              cursor-pointer
              v-for="(item, index) in predefineColors"
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
                {{ themeColor === item ? t('base.crud.selected') : item }}
              </div>
            </div>
          </div>
          <el-form-item :label="t('admin.system.customTheme')">
            <div w-full flex justify-end>
              <el-color-picker
                v-model="themeColor"
                @change="changeThemeColor"
                :predefine="predefineColors"
              />
            </div>
          </el-form-item>
        </div>
        <div w="360px">
          <div mb-8 style="color: var(--el-text-color-primary)">
            {{ t('admin.system.toolbar') }}
          </div>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="baseStore.toolbarSettings.dark" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.languagesTool')">
            <div w-full flex justify-end>
              <el-switch v-model="baseStore.toolbarSettings.language" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="baseStore.toolbarSettings.refresh" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="baseStore.toolbarSettings.notifications" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.fullscreenTool')">
            <div w-full flex justify-end>
              <el-switch v-model="baseStore.toolbarSettings.fullscreen" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.settingTool')">
            <div w-full flex justify-end>
              <el-switch v-model="baseStore.toolbarSettings.setting" />
            </div>
          </el-form-item>
        </div>
      </div>
    </crud-form>
  </crud-card>
</template>
