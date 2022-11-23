<script lang="ts" setup name="layout-toolbar-mobile-menu">
import { SettingsValueEnum } from '@/constants/enums';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});

const systemStore = useSystemStore();

const changeMobileMenu = () => {
  systemStore.mobileMenu = !systemStore.mobileMenu;
};
</script>

<template>
  <div
    p-l-6
    flex
    items-center
    :class="[
      props.fixed ? 'fixed' : '',
      systemStore.colorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
        ? 'dark'
        : '',
    ]"
  >
    <svg-icon
      name="base-app"
      cursor-pointer
      v-if="systemStore.isMobile"
      @click="changeMobileMenu()"
      :size="props.fixed ? '1.4rem' : '1.6rem'"
      :color="
        props.fixed ? 'var(--el-color-white)' : 'var(--wings-header-text-color)'
      "
    ></svg-icon>
  </div>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  bottom: 20%;
  left: 0;
  padding: 0.3rem 0.36rem 0.3rem 0.28rem;
  background-color: var(--el-color-primary);
  border-radius: 0 8px 8px 0;
  box-shadow: var(--el-box-shadow);
  transform: translateY(-50%);

  &.dark {
    background-color: var(--el-color-primary);
  }
}
</style>
