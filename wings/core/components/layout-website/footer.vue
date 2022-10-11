<script lang="ts" setup>
const { t } = useI18n();

const appCopyright = import.meta.env.APP_COPYRIGHT;

const footerTags = [
  {
    label: t('website.layout.link'),
    list: [
      {
        label: t('website.layout.document'),
        url: 'https://wings-vue-docs.netlify.app',
      },
      {
        label: t('website.layout.netlify'),
        url: 'https://wings-vue.netlify.app',
      },
    ],
  },
  {
    label: t('website.layout.community'),
    list: [
      {
        label: t('website.layout.github'),
        url: 'https://github.com/kaivanwong/wings-vue',
      },
      {
        label: t('website.layout.issue'),
        url: 'https://github.com/kaivanwong/wings/issues/new',
      },
      {
        label: t('website.layout.changelog'),
        url: 'https://github.com/kaivanwong/wings/releases',
      },
    ],
  },
];

const goPage = (url: string) => {
  window.open(url);
};
</script>
<template>
  <div w-7xl pt-20 ma flex justify-between pb-10 lh-6>
    <div w-100>
      <div
        mb-6
        text-5
        font-600
        select-none
        style="color: var(--ep-color-info-light)"
      >
        {{ t('website.home.title') }}
      </div>
      <div mb-4 text-4 select-none style="color: var(--ep-color-info-dark-2)">
        {{ t('website.home.description') }}
      </div>
    </div>
    <div flex item-start>
      <div w-64 v-for="(group, groupIndex) in footerTags" :key="groupIndex">
        <div mb-6>
          <span
            select-none
            text-5
            font-600
            style="color: var(--ep-color-info-light)"
          >
            {{ group.label }}
          </span>
        </div>
        <div
          mb-4
          v-for="(link, linkIndex) in group.list"
          :key="linkIndex"
          @click="goPage(link.url, link.isRoute)"
        >
          <span text-4 class="link" cursor-pointer transition-all>
            {{ link.label }}
          </span>
        </div>
      </div>
      <div>
        <div
          mb-6
          text-5
          font-600
          select-none
          style="color: var(--ep-color-info-light)"
        >
          {{ t('website.layout.contact') }}
        </div>
        <div mb-4 text-4 select-none style="color: var(--ep-color-info-dark-2)">
          kaivanwong@outlook.com
        </div>
      </div>
    </div>
  </div>
  <div w-7xl ma p-y-10>
    <el-divider></el-divider>
    <div text-center pt-4 text-4 style="color: var(--ep-color-info-light-3)">
      <span>{{ appCopyright }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.link {
  color: var(--ep-color-info-dark-2);

  &:hover {
    color: var(--ep-color-info-light);
  }
}
</style>
