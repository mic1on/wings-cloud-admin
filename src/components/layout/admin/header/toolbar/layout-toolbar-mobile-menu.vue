<script lang="ts" setup>
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
  <div p-l-6 flex items-center :class="props.fixed ? 'fixed' : ''">
    <el-icon
      :size="props.fixed ? '1.4rem' : '1.6rem'"
      v-if="baseStore.isMobile"
      @click="changeMobileMenu()"
      :color="
        props.fixed ? 'var(--el-color-white)' : 'var(--wings-header-text-color)'
      "
      ><Expand
    /></el-icon>
  </div>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 50%;
  left: 0;
  padding: 0.2rem;
  background-color: var(--el-color-primary);
  border-radius: 0 8px 8px 0;
  box-shadow: var(--el-box-shadow-dark);
  transform: translateY(-50%);
}
</style>
