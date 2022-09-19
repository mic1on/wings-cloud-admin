<script lang="ts" setup>
import useLanguage from '@/hooks/app-language';

const props = defineProps({
  onlyIcon: {
    type: Boolean,
    default: false,
  },
});

const language = useLanguage();
</script>

<template>
  <el-dropdown @command="language.changeLanguage">
    <span flex items-center cursor-pointer h-full v-if="!props.onlyIcon">
      <span mr-2>{{
        language.languages[language.currentLanguage.value].name
      }}</span>
      <i inline-flex i="ep-arrow-down"></i>
    </span>
    <app-svg-icon
      cursor-pointer
      v-if="props.onlyIcon"
      w-5
      h-5
      style="color: var(--ep-text-color-primary)"
      name="language"
    ></app-svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(value, key) in language.languages"
          :key="key"
          :command="key"
          >{{ value.name }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
