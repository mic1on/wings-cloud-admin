<script lang="ts" setup>
const { t } = useI18n();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div>
    <div v-if="props.active" flex items-center justify-center>
      <span
        w-2
        h-2
        mr-2
        style="background-color: var(--el-color-primary); border-radius: 50%"
      ></span>
      <span text-2 style="color: var(--el-text-color-primary)">
        {{ t('base.crud.selected') }}
      </span>
    </div>
    <div v-else text-center text-2 style="color: var(--el-text-color-regular)">
      {{ props.label }}
    </div>
  </div>
</template>
