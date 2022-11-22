<script lang="ts" setup name="crud-dialog">
import type { ComponentInternalInstance } from 'vue';
import { useStore } from '@/hooks/use-store';

const { slots } = getCurrentInstance() as ComponentInternalInstance;

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const { baseStore } = useStore();

const visible = ref<boolean>(props.value);

const emit = defineEmits(['input']);

const closedHandle = (): void => {
  emit('input', false);
};
</script>

<template>
  <el-dialog
    align-center
    append-to-body
    destroy-on-close
    v-model="visible"
    :width="baseStore.isMobile ? '90%' : '50%'"
    v-bind="$attrs"
    @closed="closedHandle"
  >
    <template #header>
      <slot name="header" v-if="slots.header"></slot>
    </template>
    <div :style="{ height: '50vh' }" overflow-y-scroll>
      <slot></slot>
    </div>
    <template #footer v-if="slots.footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>
