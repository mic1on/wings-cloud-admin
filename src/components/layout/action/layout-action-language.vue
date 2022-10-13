<script lang="ts" setup>
import { useLanguage } from '@/hooks/use-language';

const props = defineProps({
  onlyIcon: {
    type: Boolean,
    default: false,
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
      cursor-pointer
      v-if="props.onlyIcon"
      w-5
      h-5
      name="language"
      custom-style="color: var(--ep-text-color-primary)"
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
