<script lang="ts" setup></script>

<template>
  <div
    style="
      height: calc(
        100vh - var(--wings-header-height) - var(--wings-tag-height)
      );
      background: var(--wings-main-fill);
      box-shadow: 10px 0 10px -10px rgb(0 0 0 / 12%);
    "
  >
    <slot name="router-view"></slot>
  </div>
</template>
