<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/navbar.vue";
import Konami from "./components/konami.vue";
</script>

<template>
  <div class="lg:max-w-[924px] 2xl:max-w-[1236px] my-0 mx-auto font-normal">
    <navbar />
  
    <div class="my-6 px-8 lg:px-0">
      <RouterView />
    </div>  
  </div>
  <konami />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
