<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFiexd from "./components/LayoutFiexd.vue";
import { useCounterStore } from "@/stores/category.js";
import { onMounted } from "vue";

const getCategory = useCounterStore();
// console.log(getCategory);
onMounted(() => {
  getCategory.getLayoutData();
});
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <LayoutFiexd />
</template>