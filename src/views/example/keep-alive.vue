<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';
import { useCloned } from '@vueuse/core';
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
  // TODO ,重新开启 keep alive，addRoute 设置的 keepAlive 字段没有生效，还是 false
  if (_route && _route.meta) {
    _route.meta.keepAlive = val as boolean;
    const { cloned } = useCloned(_route.meta);
    _route.meta = cloned.value;
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
