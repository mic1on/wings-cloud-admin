<script lang="ts" setup>
// const router = useRouter();

// const goHome = (): void => {
//   currentTab.value = import.meta.env.APP_FIRST_ROUTE;
//   router.push({ path: import.meta.env.APP_FIRST_ROUTE });
// };
</script>

<template>
  <div cursor-pointer @click="goHome">
    <img h-8 src="@/assets/logo.svg" />
  </div>
</template>
