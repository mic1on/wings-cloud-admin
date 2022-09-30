<script lang="ts" setup>
import Welcome from './components/welcome.vue';
import Navigation from './components/navigation.vue';
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="18"> <welcome></welcome></el-col>
    <el-col :span="6"> <navigation></navigation></el-col>
  </el-row>
</template>
