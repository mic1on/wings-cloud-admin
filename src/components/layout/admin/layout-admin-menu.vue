<script lang="ts" setup name="layout-admin-menu">
import { useStore } from '@/hooks/use-store';

const route = useRoute();

const { baseStore, routeStore } = useStore();

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
  },
});

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
      'calc(100vh - var(--wings-aside-logo-height) - var(--wings-collapse-height) )';
  }
  return 'height:' + _height;
});

const width = computed(() => {
  let _width =
    'width:calc(100vw - var(--wings-header-toobar-width) - var(--wings-aside-width));height:auto';
  return _width;
});
</script>

<template>
  <el-scrollbar :wrap-style="props.mode == 'vertical' ? height : width">
    <div
      :class="[
        baseStore.settings.MenuStyle,
        baseStore.settings.ColorScheme,
        'layout-admin-menu',
      ]"
    >
      <el-menu
        router
        :mode="props.mode"
        collapse-transition
        :collapse="props.mode == 'vertical' ? baseStore.collapse : false"
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
<style lang="scss">
.layout-admin-menu {
  .el-menu {
    width: 100% !important;
    transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);

    .el-sub-menu__title {
      color: var(--wings-menu-text-color);

      &:hover {
        color: var(--wings-menu-text-color-hover);
        background-color: var(--wings-menu-bg-color-hover);
      }
    }
  }

  .el-menu.el-menu--collapse {
    .el-sub-menu__title {
      justify-content: center;
    }
  }

  .el-menu.el-menu--vertical {
    background-color: var(--wings-menu-bg-color);
  }

  .el-menu.el-menu--horizontal {
    background-color: var(--wings-header-bg-color);
  }

  .el-menu-item {
    color: var(--wings-menu-text-color);

    &:hover {
      color: var(--wings-menu-text-color-hover);
      background-color: var(--wings-menu-bg-color-hover);
    }

    &.is-active {
      color: var(--wings-menu-text-color-active) !important;
      background-color: var(--wings-menu-bg-color-active) !important;
    }
  }

  .el-sub-menu .el-menu {
    color: var(--wings-menu-text-color);
    background-color: var(--wings-menu-inline-bg-color);
  }

  &.square {
    .el-menu {
      padding: 0;
      border-radius: 0;

      .el-sub-menu__title {
        margin-bottom: 0;
        border-radius: 0;
      }
    }

    .el-menu-item {
      margin-bottom: 0;
      border-radius: 0;
    }

    .el-sub-menu {
      margin-bottom: 0;

      .el-menu.el-menu--inline {
        padding: 0;
      }
    }

    &.el-popper {
      border-radius: 0;
    }
  }

  &.round {
    .el-menu {
      padding: 10px;
      border-radius: var(--wings-menu-radius);

      .el-sub-menu__title {
        margin-bottom: var(--wings-menu-gap);
        border-radius: var(--wings-menu-radius);
      }
    }

    .el-menu-item {
      margin-bottom: var(--wings-menu-gap);
      border-radius: var(--wings-menu-radius);

      &:last-child {
        margin-bottom: 0;
      }
    }

    .el-sub-menu {
      margin-bottom: var(--wings-menu-gap);

      .el-menu.el-menu--inline {
        padding: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.el-popper {
      border-radius: var(--wings-menu-radius);
    }
  }
}
</style>
