<script lang="ts" setup name="crud-form">
const { t } = useI18n();

const props = defineProps({
  model: {
    type: Object,
    default: () => {
      return {};
    },
  },
  action: {
    type: Boolean,
    default: true,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  formWidth: {
    type: String,
    default: '500px',
  },
  formPosition: {
    type: String,
    default: 'center',
  },
  labelWidth: {
    type: String,
    default: '120px',
  },
  labelPosition: {
    type: String,
    default: 'right',
  },
  actionSubmitLabel: {
    type: String,
    default: '',
  },
  actionCancelLabel: {
    type: String,
    default: '',
  },
});

const getPosition = () => {
  const style = {
    'justify-content': 'center',
  };
  if (props.formPosition === 'center') style['justify-content'] = 'center';
  if (props.formPosition === 'left') style['justify-content'] = 'flex-start';
  if (props.formPosition === 'right') style['justify-content'] = 'flex-end';
  return style;
};

const submit = () => {};
</script>
<template>
  <div flex items-center :style="[getPosition()]">
    <el-form
      :style="{ width: props.formWidth }"
      :model="props.model"
      :label-width="labelWidth"
      :label-position="labelPosition"
      :inline="inline"
    >
      <slot></slot>
      <div v-if="action">
        <el-button type="primary" @click="submit">
          {{ props.actionSubmitLabel || t('base.crud.submit') }}
        </el-button>
        <el-button>
          {{ props.actionCancelLabel || t('base.crud.cancel') }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>
