<script lang="ts" setup>
import AdminLayoutHeader from './header.vue';
import AdminLayoutFooter from './footer.vue';
import AdminLayoutSider from './sider.vue';
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <admin-layout-sider></admin-layout-sider>
    </el-aside>
    <el-container>
      <el-header>
        <admin-layout-header></admin-layout-header>
      </el-header>
      <el-main>
        <slot name="router-view"></slot>
      </el-main>
      <el-footer>
        <admin-layout-footer></admin-layout-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
