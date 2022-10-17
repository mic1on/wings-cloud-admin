<script lang="ts" setup>
const router = useRouter();

const appName = import.meta.env.APP_NAME;

const goHomeRoute = () => {
  router.push({ path: import.meta.env.APP_ADMIN_FIRST_ROUTE });
};
</script>

<template>
  <div
    flex
    items-center
    justify-center
    content-center
    cursor-pointer
    @click="goHomeRoute"
  >
    <img h-9 src="@/assets/svgs/logo.svg" />
    <div
      ml-6
      text-6
      font-600
      text-center
      class="single-line-omitted"
      style="color: var(--wings-header-text-color)"
    >
      {{ appName }}
    </div>
  </div>
</template>
