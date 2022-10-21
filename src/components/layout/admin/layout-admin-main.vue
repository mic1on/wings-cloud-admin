<script lang="ts" setup name="layout-admin-main">
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <div
    style="
      box-sizing: border-box;
      padding: var(--wings-main-padding);
      overflow-y: scroll;
      background: var(--wings-main-fill);
    "
    :style="
      baseStore.layout !== 'aside'
        ? 'height: calc(100vh - var(--wings-header-height) - var(--wings-tag-height) );'
        : 'height: calc(100vh - var(--wings-tag-height));'
    "
  >
    <slot name="main-router-view"></slot>
  </div>
</template>
