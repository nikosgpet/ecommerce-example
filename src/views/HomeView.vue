<template>
  <main>
    <ItemGroup :items="items"/>
  </main>
</template>

<script setup lang="ts">
import ItemGroup from '@/components/item/item-group.vue';
import { useItems } from '@/composables/data/use-items';

const items = useItems();
</script>
