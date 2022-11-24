<script lang="ts" setup name="icon">
import { ElMessage } from 'element-plus';
import { useClipboard } from '@vueuse/core';
import { autoImportSvgs } from '@/utils/auto';

const { t } = useI18n();

const svgs = [
  {
    title: t('example.icon.base'),
    icons: autoImportSvgs(
      import.meta.glob('@/assets/svgs/base/*.svg', {
        import: 'default',
        eager: true,
      })
    ),
  },
  {
    title: t('example.icon.emoji'),
    icons: autoImportSvgs(
      import.meta.glob('@/assets/svgs/emoji/*.svg', {
        import: 'default',
        eager: true,
      })
    ),
  },
  {
    title: t('example.icon.social'),
    icons: autoImportSvgs(
      import.meta.glob('@/assets/svgs/social/*.svg', {
        import: 'default',
        eager: true,
      })
    ),
  },
  {
    title: t('example.icon.colorScheme'),
    icons: autoImportSvgs(
      import.meta.glob('@/assets/svgs/color-scheme/*.svg', {
        import: 'default',
        eager: true,
      })
    ),
  },
];

const copyIcon = (icon: string) => {
  const { copy } = useClipboard({
    source: `<svg-icon name="${icon}"/ >`,
  });
  copy();
  ElMessage.success(t('example.icon.copySuccess'));
};
</script>
<template>
  <crud-card>
    <div p-y-4 v-for="(item, index) in svgs" :key="index">
      <div pb-4 text-4 style="color: var(--el-text-color-regular)">
        {{ item.title }}
      </div>
      <div flex items-start flex-wrap>
        <div
          w-30
          p-t-6
          p-b-4
          cursor-pointer
          transition
          flex
          items-center
          justify-center
          flex-wrap
          class="svg"
          v-for="(icon, iconIndex) in item.icons"
          :key="iconIndex"
          @click="copyIcon(icon)"
        >
          <svg-icon :name="icon" size="2rem" />
          <div
            w-full
            p-t-4
            text-center
            style="color: var(--el-text-color-regular); font-size: 14px"
          >
            {{ icon }}
          </div>
        </div>
      </div>
    </div>
  </crud-card>
</template>

<style lang="scss" scoped>
.svg:hover {
  background-color: var(--el-fill-color-darker);
}
</style>
