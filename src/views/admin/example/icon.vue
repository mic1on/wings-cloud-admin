<script lang="ts" setup>
import type { Files } from '@/utils/auto/index.d';
import { autoImportSvgs } from '@/utils/auto';

const { t } = useI18n();

const svgs: Files = autoImportSvgs(
  import.meta.glob('@/assets/svgs/**/*.svg', {
    import: 'default',
    eager: true,
  })
);
</script>
<template>
  <crud-card
    :title="t('admin.example.svgIconTitle')"
    :sub-title="t('admin.example.svgIconSubTitle')"
  >
    <div flex items-center flex-wrap>
      <div
        w-30
        p-y-6
        cursor-pointer
        hover-bg-light
        transition
        v-for="(key, value) in svgs"
        :key="key"
      >
        <svg-icon :name="(value as string)" size="2rem"></svg-icon>
        <div
          text-3
          p-t-4
          text-center
          style="color: var(--ep-text-color-regular)"
          >{{ value }}</div
        >
      </div>
    </div>
  </crud-card>
</template>
