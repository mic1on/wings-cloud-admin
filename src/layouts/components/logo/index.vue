<script lang="ts" setup>
const router = useRouter();

const goHome = (): void => {
  router.push({ path: import.meta.env.APP_FIRST_ROUTE });
};
</script>

<template>
  <div cursor-pointer @click="goHome">
    <img h-8 src="@/assets/logo.svg" />
  </div>
</template>
