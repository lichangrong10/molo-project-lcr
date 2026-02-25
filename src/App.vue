<script setup>
import { RouterLink, RouterView } from "vue-router";
import { getCartAPI } from "@/apis/cart.js";
import { onMounted } from "vue";
import { useCatrStore } from "@/stores/catr.js";
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
