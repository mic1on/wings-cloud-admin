<script lang="ts" setup></script>

<template>
  <div
    style="
      box-sizing: border-box;
      height: calc(
        100vh - var(--wings-tag-height) - var(--wings-header-height)
      );
      padding: var(--wings-main-padding);
      background: var(--wings-main-fill);
      box-shadow: 10px 0 10px -10px rgb(0 0 0 / 12%);
    "
  >
    <slot name="router-view"></slot>
  </div>
</template>
