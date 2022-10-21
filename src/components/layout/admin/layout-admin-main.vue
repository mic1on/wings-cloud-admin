<script lang="ts" setup name="layout-admin-main"></script>

<template>
  <div
    style="
      box-sizing: border-box;
      height: calc(
        100vh - var(--wings-tag-height) - var(--wings-header-height)
      );
      background: var(--wings-main-fill);
    "
  >
    <slot name="main-router-view"></slot>
  </div>
</template>
