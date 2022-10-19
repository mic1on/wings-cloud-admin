<script lang="ts" setup>
const { t } = useI18n();

const settingForm = reactive({
  theme: 'blue',
  layout: 'top',
  tab: 'card',
  menu: 'round',
  languages: true,
  refresh: true,
  dark: true,
  fullscreen: true,
  setting: true,
  collapse: true,
});

const themeColor = ref('#0d6efd');

const predefineColors = ref(['#0d6efd', '#42b983', '#fe7300', '#ea3a72']);

const update = () => {};

const setThemeColor = (color: string) => {
  // TODO
  themeColor.value = color;
  const element = window.document.querySelector('html');
  if (element) {
    element.style.setProperty('--ep-color-primary', color);
  }
};
</script>
<template>
  <crud-card :title="t('admin.system.settingTitle')">
    <crud-form
      :model="settingForm"
      form-width="100%"
      form-position="left"
      label-width="240px"
      label-position="left"
    >
      <div flex flex-wrap>
        <div w="460px" mr-30>
          <el-divider mb-8>
            <div text-4 style="color: var(--ep-text-color-primary)">
              {{ t('admin.system.theme') }}
            </div>
          </el-divider>
          <div flex flex-wrap justify-between items-center m-b-10>
            <div
              w-24
              h-10
              cursor-pointer
              v-for="(item, index) in predefineColors"
              :key="index"
              @click="setThemeColor(item)"
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
          <div flex items-center justify-between>
            <div>{{ t('admin.system.customTheme') }}</div>
            <el-color-picker
              v-model="themeColor"
              :predefine="predefineColors"
            />
          </div>
        </div>
        <div w="460px">
          <el-divider mb-8>
            <div text-4 style="color: var(--ep-text-color-primary)">
              {{ t('admin.system.toolbar') }}
            </div>
          </el-divider>
          <el-form-item :label="t('admin.system.languagesTool')">
            <div w-full flex justify-end>
              <el-switch v-model="settingForm.languages" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="settingForm.refresh" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="settingForm.dark" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="settingForm.fullscreen" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.settingTool')">
            <div w-full flex justify-end>
              <el-switch v-model="settingForm.setting" />
            </div>
          </el-form-item>
          <el-form-item :label="t('admin.system.refreshTool')">
            <div w-full flex justify-end>
              <el-switch v-model="settingForm.collapse" />
            </div>
          </el-form-item>
        </div>
      </div>
    </crud-form>
  </crud-card>
</template>
