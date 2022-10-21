<script lang="ts" setup name="layout-action-language">
import { useLanguage } from '@/hooks/use-language';

const props = defineProps({
  onlyIcon: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});

const { changeLanguage, currentLanguage, languages } = useLanguage();
</script>

<template>
  <el-dropdown @command="changeLanguage">
    <span flex items-center cursor-pointer h-full v-if="!props.onlyIcon">
      <span mr-2>{{ languages[currentLanguage].name }}</span>
      <i inline-flex i="ep-arrow-down"></i>
    </span>
    <svg-icon
      v-if="props.onlyIcon"
      cursor-pointer
      size="1.2rem"
      name="international"
      :color="props.color"
    ></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(value, key) in languages"
          :key="key"
          :command="key"
          >{{ value.name }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
