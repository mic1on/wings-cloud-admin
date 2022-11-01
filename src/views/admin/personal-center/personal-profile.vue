<script lang="ts" setup>
const { t } = useI18n();
</script>
<template>
  <crud-card
    action
    :action-submit-label="t('base.crud.update')"
    :title="t('admin.personalCenter.personalProfile.menuName')"
    :sub-title="t('admin.personalCenter.personalProfile.menuDescription')"
  >
    <el-form
      :style="{ width: '100%' }"
      label-width="240px"
      label-position="left"
      m-b-6
    >
    </el-form>
  </crud-card>
</template>
