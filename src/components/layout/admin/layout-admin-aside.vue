<script lang="ts" setup name="layout-admin-aside">
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <div>
    <layout-admin-logo
      v-if="
        baseStore.settings.Layout === 'aside' ||
        baseStore.settings.Layout === 'aside-lean'
      "
      style="height: var(--wings-logo-height)"
    ></layout-admin-logo>
    <layout-admin-menu></layout-admin-menu>
    <layout-action-collapse></layout-action-collapse>
  </div>
</template>
