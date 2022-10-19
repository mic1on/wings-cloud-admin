<script lang="ts" setup>
import type { IObject } from '@/global.d';
import { autoImportSvgs } from '@/utils/auto';

const svgs: IObject = autoImportSvgs(
  import.meta.glob('@/assets/svgs/**/*.svg', {
    eager: true,
  })
);

console.log(svgs);
</script>
<template>
  123
  <crud-card>
    <template #header>
      <div>123</div>
    </template>
  </crud-card>
</template>
