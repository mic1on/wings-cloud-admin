<script lang="ts" setup>
import { useStore } from '@/hooks/use-store';

const { baseStore } = useStore();
</script>

<template>
  <el-container style="background: var(--ep-bg-color)">
    <el-header important="p-x-6">
      <layout-admin-header></layout-admin-header>
    </el-header>
    <el-container>
      <el-aside>
        <layout-admin-sider></layout-admin-sider>
      </el-aside>
      <el-main>
        <layout-admin-tab></layout-admin-tab>
        <layout-admin-main>
          <template #router-view>
            <slot name="router-view"></slot>
          </template>
        </layout-admin-main>
        <el-footer v-if="baseStore.adminShowFooter">
          <layout-admin-footer></layout-admin-footer>
        </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>
