<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import { routes } from '@/plugins/vue-router';
import { useSystemStore } from '@/hooks/use-store/use-system-store';

defineOptions({
  name: 'ExampleKeepAlive',
});

const { t } = useI18n();

const route = useRoute();
const router = useRouter();

const systemStore = useSystemStore();

interface Form {
  enable: boolean;
  num: number;
}

const form = ref<Form>({
  enable: route.meta?.keepAlive || false,
  num: 3,
});

const changeKeepAlive = (val: string | number | boolean): void => {
  let _route = routes
    .find((item) => item.path == '/example')
    ?.children?.find((item) => item.path == route.path);
  if (_route && _route.meta) {
    _route.meta.keepAlive = val as boolean;
  }
  router.addRoute(_route as RouteRecordRaw);
};
</script>
<template>
  <crud-card>
    <crud-page-form :model="form">
      <el-form-item :label="t('example.keepAlive.enable')">
        <el-switch v-model="form.enable" @change="changeKeepAlive"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="form.num"></el-input-number>
      </el-form-item>
    </crud-page-form>
  </crud-card>
</template>
