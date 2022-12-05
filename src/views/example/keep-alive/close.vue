<script lang="ts" setup>
defineOptions({
  name: 'ExampleKeepAliveClose',
});

const num = ref<number>(6);
</script>
<template>
  <crud-card>
    <el-input-number v-model="num"></el-input-number>
  </crud-card>
</template>
