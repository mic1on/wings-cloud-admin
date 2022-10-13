<script lang="ts" setup>
const { t } = useI18n();

const router = useRouter();

const goAdmin = () => {
  router.push({
    path: import.meta.env.APP_ADMIN_FIRST_ROUTE,
  });
};
</script>

<template>
  <div h-screen>
    <div h-full relative>
      <div
        w-7xl
        absolute
        top="50%"
        left="50%"
        translate-x="-50%"
        translate-y="-50%"
        flex
        justify-between
        items-center
      >
        <div w-118>
          <div
            text-15
            mb-6
            font-600
            lh-18
            select-none
            style="color: var(--ep-text-color-primary)"
          >
            <div mb-2>{{ t('website.home.title') }}</div>
            <div>{{ t('website.home.subTitle') }}</div>
          </div>
          <div
            text-5
            lh-8
            select-none
            style="color: var(--ep-text-color-regular)"
          >
            {{ t('website.home.description') }}
          </div>
          <div pt-14>
            <el-button
              important="h-14 text-5 mr-8 font-600 p-x-19"
              type="primary"
              @click="goAdmin"
            >
              {{ t('website.home.getStart') }}
            </el-button>
          </div>
        </div>
        <div w-2xl h-xl relative>
          <div
            w-133
            h-133
            absolute
            top="50%"
            left="50%"
            translate-x="-50%"
            translate-y="-50%"
            border-rd="50%"
            z-11
            style="background-color: rgb(255 214 90 / 100%)"
          ></div>
          <div
            absolute
            top="12%"
            left="0%"
            w-123
            border-rd-2
            h-82
            z-12
            overflow-hidden
          >
            <img w-full src="@/assets/images/website/home-admin-dark.png" />
          </div>
          <div
            absolute
            bottom="12%"
            right="0%"
            w-122
            h-91
            border-rd-2
            overflow-hidden
            z-13
            style="box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%)"
          >
            <img w-full src="@/assets/images/website/home-admin-light.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
