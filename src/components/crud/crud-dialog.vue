<script lang="ts" setup>
import type { ComponentInternalInstance } from 'vue';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

defineOptions({
  name: 'CrudDialog',
});

const { slots } = getCurrentInstance() as ComponentInternalInstance;

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const systemStore = useSystemStore();

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
    :width="systemStore.isMobile ? '90%' : '50%'"
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
