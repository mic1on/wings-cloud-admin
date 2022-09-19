<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '50%',
  },
  height: {
    type: String,
    default: '50vh',
  },
  title: {
    type: String,
    default: '',
  },
  center: {
    type: Boolean,
    default: true,
  },
  alignCenter: {
    type: Boolean,
    default: true,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  closeOnClickModal: {
    type: Boolean,
    default: false,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: false,
  },
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
});

const visible = ref<boolean>(props.value);

const emit = defineEmits(['input']);

const closedHandle = (): void => {
  emit('input', false);
};
</script>

<template>
  <el-dialog
    class="app-dialog"
    v-model="visible"
    :width="props.width"
    :title="props.title"
    :center="props.center"
    :align-center="props.alignCenter"
    :append-to-body="props.appendToBody"
    :draggable="props.draggable"
    :fullscreen="props.fullscreen"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :destroy-on-close="destroyOnClose"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    @closed="closedHandle"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <div :style="{ height: props.height }" overflow-y-scroll>
      <slot name="content"></slot>
    </div>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>
