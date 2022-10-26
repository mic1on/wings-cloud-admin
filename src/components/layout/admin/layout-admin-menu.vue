<script lang="ts" setup name="layout-admin-menu">
import { useStore } from '@/hooks/use-store';

const route = useRoute();

const { baseStore, routeStore } = useStore();

const height = computed(() => {
  let _height = '100vh';
  if (
    baseStore.settings.Layout === 'top' ||
    baseStore.settings.Layout === 'top-lean'
  ) {
    _height =
      'calc(100vh - var(--wings-header-height) - var(--wings-collapse-height))';
  } else {
    _height =
      'calc(100vh - var(--wings-logo-height) - var(--wings-collapse-height) )';
  }
  return 'height:' + _height;
});
</script>

<template>
  <el-scrollbar :wrap-style="height">
    <div :class="baseStore.settings.MenuStyle">
      <el-menu
        router
        mode="vertical"
        collapse-transition
        :collapse="baseStore.collapse"
        :unique-opened="baseStore.settings.UniqueOpened"
        :default-active="route.path"
        important="border-r-none"
      >
        <layout-admin-menu-item
          :routes="routeStore.adminMenuRoutes"
        ></layout-admin-menu-item>
      </el-menu>
    </div>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.el-menu) {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-sub-bg-color);
  border-radius: var(--wings-menu-radius);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.el-menu.el-menu--collapse {
  width: 100%;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);

  :deep(.el-sub-menu__title) {
    --at-apply: justify-center !important;
  }
}

.el-menu.el-menu--vertical {
  padding: 10px;
  background-color: var(--wings-menu-bg-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.el-menu.el-menu-inline {
  color: var(--wings-menu-text-color);
  background-color: var(--wings-menu-bg-color);
  border-radius: var(--wings-menu-radius);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

.square {
  :deep(.el-menu) {
    border-radius: 0 !important;
  }

  .el-menu.el-menu-inline {
    border-radius: 0 !important;
  }

  .el-menu.el-menu--vertical {
    padding: 0 !important;
  }

  :deep(.el-menu-item) {
    margin-bottom: 0 !important;
    border-radius: 0 !important;
  }

  :deep(.el-sub-menu) {
    margin-bottom: 0 !important;

    .el-sub-menu__title {
      margin-bottom: 0 !important;
      border-radius: 0 !important;
    }
  }
}
</style>
