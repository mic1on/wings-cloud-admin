<script lang="ts" setup name="layout-toolbar-mobile-menu">
import { SettingsValueEnum } from '@/enums';
import { useStore } from '@/hooks/use-store';

const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});

const { baseStore } = useStore();

const changeMobileMenu = () => {
  baseStore.mobileMenu = !baseStore.mobileMenu;
};
</script>

<template>
  <div
    p-l-6
    flex
    items-center
    :class="[
      props.fixed ? 'fixed' : '',
      baseStore.settings.ColorScheme === SettingsValueEnum.COLOR_SCHEME_DARK
        ? 'dark'
        : '',
    ]"
  >
    <svg-icon
      name="app"
      cursor-pointer
      v-if="baseStore.isMobile"
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
    background-color: var(--el-color-primary-light-3);
  }
}
</style>
