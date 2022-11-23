<script lang="ts" setup name="layout-action-notification">
import { useStore } from '@/hooks/use-store';
import { RouteEnum } from '@/constants/enums';

const { t } = useI18n();

const router = useRouter();

const { userStore } = useStore();

const props = defineProps({
  color: {
    type: String,
    default: 'var(--wings-header-text-color)',
  },
});

const goPersonalNotification = () => {
  router.push(RouteEnum.ROUTE_SYSTEM_NOTIFICATION);
};
</script>

<template>
  <div flex items-center cursor-pointer v-if="userStore.isLogin">
    <el-popover :width="320" trigger="hover">
      <template #reference>
        <el-badge is-dot flex items-center>
          <svg-icon
            name="base-bell"
            size="1.2rem"
            :color="props.color"
          ></svg-icon>
        </el-badge>
      </template>
      <template #default>
        <div flex justify-between items-center>
          <span text-4 style="color: var(--el-text-color-regular)">
            {{ t('app.toolbar.notifications.notifications') }}
          </span>
          <div>
            <el-button text type="primary">
              {{ t('app.toolbar.notifications.clear') }}
            </el-button>
            <el-button text type="primary" @click="goPersonalNotification">
              {{ t('app.toolbar.notifications.more') }}
            </el-button>
          </div>
        </div>
        <div>
          <el-empty
            :image-size="100"
            :description="t('app.toolbar.notifications.empty')"
          />
        </div>
      </template>
    </el-popover>
  </div>
</template>
