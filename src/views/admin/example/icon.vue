<script lang="ts" setup>
import type { Files } from '@/utils/auto/index.d';
import { autoImportSvgs } from '@/utils/auto';

const files: Files = autoImportSvgs(import.meta.glob('@/assets/svgs/**/*.svg'));

const svgNames = ref<Array<string>>([]);

Object.keys(files).forEach((key) => {
  svgNames.value.push(key);
});
</script>
<template>
  <crud-card>
    <template #header> </template>
    <template #content>
      <div flex items-center>
        <div mr-4 v-for="(item, index) in svgNames" :key="index">
          <svg-icon :name="item" size="2rem"></svg-icon>
        </div>
      </div>
    </template>
  </crud-card>
</template>
