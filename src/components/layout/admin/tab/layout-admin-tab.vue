<script lang="ts" setup name="layout-admin-tab">
import type { IObject } from '@/global.d';
import { useStore } from '@/hooks/use-store';
import { arrayRecursion } from '@/utils/common';

const { t } = useI18n();

const route = useRoute();
const router = useRouter();

const { baseStore, routeStore } = useStore();

const tab: any = reactive({
  tabList: [],
  nowTab: route.path,
  homeTab: {},
});

const findTab = (path: string): IObject => {
  let res = { isFind: false, path: '', index: 0, length: 0 };
  if (tab.tabList.length > 0) {
    res.length = tab.tabList.filter((item: IObject, index: number) => {
      if (item.name == path) {
        res.path = path;
        res.index = index;
        return item;
      }
    });
  }
  res.length == 0 ? (res.isFind = false) : (res.isFind = true);
  return res;
};

const addTab = (data: IObject, isPushTab?: boolean): void => {
  isPushTab = isPushTab || false;
  tab.tabList.push({ label: data.meta.menuName, name: data.path });
  tab.nowTab = data.path;
  if (isPushTab) router.push({ path: data.path });
};

const tabClick = (e: any): void => {
  router.push({ path: e.props.name });
  tab.nowTab = e.props.name;
};

const tabRemove = (e: string | number): void => {
  if (tab.tabList.length == 1) return;
  let { isFind, index } = findTab(e.toString());
  let nowTabRes = findTab(tab.nowTab);
  if (isFind) {
    tab.tabList.splice(index, 1);
    if (nowTabRes.index == index && nowTabRes.index !== 0) {
      router.push({ path: tab.tabList[index - 1].name });
    } else if (nowTabRes.index === 0) {
      router.push({ path: tab.tabList[0].name });
    }
  }
};

const clickOperationMenu = (command: string | number | object): void => {
  if (command == 'current') {
    tabRemove(tab.nowTab);
  } else if (command == 'other') {
    tab.nowTab = '';
    tab.tabList = [];
    addTab(route);
  } else if (command == 'all') {
    tab.nowTab = '';
    tab.tabList = [];
    addTab(tab.homeTab, true);
  }
};

onBeforeMount(() => {
  tab.homeTab = arrayRecursion(
    'path',
    routeStore.adminMenuRoutes,
    import.meta.env.APP_ADMIN_FIRST_ROUTE
  );
  const { isFind, path } = findTab(route.path);
  if (isFind) {
    tab.nowTab = path;
  } else {
    addTab(route);
  }
});

watch(
  () => route.path,
  () => {
    tab.nowTab = route.path;
    let { isFind, path } = findTab(route.path);
    if (isFind) {
      tab.nowTab = path;
    } else {
      addTab(route);
    }
  }
);
</script>

<template>
  <div
    flex
    items-center
    justify-between
    class="slot"
    :class="baseStore.settings.TabStyle"
  >
    <el-tabs
      v-model="tab.nowTab"
      type="card"
      closable
      tab-position="top"
      @tab-click="tabClick"
      @tab-remove="tabRemove"
      style="width: 90%"
    >
      <el-tab-pane
        v-for="item in tab.tabList"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <div class="operation">
      <el-dropdown @command="clickOperationMenu">
        <el-button size="small" type="primary">
          <span text-2 mr-2>{{ t('app.tab.more') }}</span>
          <el-icon>
            <ArrowDown></ArrowDown>
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="current">{{
              t('app.tab.close')
            }}</el-dropdown-item>
            <el-dropdown-item command="other">{{
              t('app.tab.closeOther')
            }}</el-dropdown-item>
            <el-dropdown-item command="all">{{
              t('app.tab.closeAll')
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  box-sizing: border-box;
  height: var(--wings-tab-height);
  padding: 0 var(--wings-main-padding);
  background-color: var(--wings-tab-bg-color) !important;
  border-bottom: 1px solid var(--wings-tab-border-color);
  transition: all var(--el-transition-duration)
    var(--el-transition-function-ease-in-out-bezier);
}

:deep(.el-tabs__header) {
  margin: 0 !important;
  border: none !important;

  --at-apply: flex items-center;
}

:deep(.el-tabs__nav) {
  border: none !important;
}

:deep(.el-tabs__item) {
  height: var(--el-tabs-header-height);
  line-height: var(--el-tabs-header-height);
  border-left: none !important;
}

:deep(.el-tabs__item.is-active) {
  border: none;
  border-bottom: 2px solid var(--el-color-primary) !important;
}

.slot.round {
  height: auto;
  background-color: var(--wings-main-fill) !important;
  border-bottom: 1px solid rgba($color: #000, $alpha: 0%);

  :deep(.el-tabs__item) {
    height: 30px;
    line-height: 30px;
    border-left: none !important;
  }

  :deep(.el-tabs__item.is-active) {
    background-color: var(--el-bg-color) !important;
    border-bottom: 0 !important;
    border-radius: 6px;
  }

  :deep(.el-tabs__nav-next) {
    --at-apply: flex items-center;

    top: 50% !important;
    line-height: 30px;
    transform: translateY(-50%) !important;
  }

  :deep(.el-tabs__nav-prev) {
    --at-apply: flex items-center;

    top: 50% !important;
    line-height: 30px;
    transform: translateY(-50%) !important;
  }
}
</style>
