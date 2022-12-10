<template>
  <div class="about">
    <h1>This is a search page for {{ query }}</h1>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  query: string;
}

const props = withDefaults(defineProps<IProps>(), {})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
