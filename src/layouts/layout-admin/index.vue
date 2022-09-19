<script lang="ts" setup>
import ViewsLayoutHeader from './header.vue';
import ViewsLayoutSider from './sider.vue';
import ViewsLayoutFooter from './footer.vue';
</script>
<template>
  <a-layout class="layout-demo">
    <a-layout-sider>
      <views-layout-sider></views-layout-sider>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <views-layout-header></views-layout-header>
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <slot name="router-view"></slot>
        </a-layout-content>
        <a-layout-footer>
          <views-layout-footer></views-layout-footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
