<template>
  <main>
    <h2>Ventes en cours</h2>
    <SaleGroup :sales="sales"/>

    <h2>Les plus récents</h2>
    <ItemGroup :items="items"/>
  </main>
</template>

<script setup lang="ts">
import SaleGroup from '@/components/sale/sale-group.vue';
import ItemGroup from '@/components/item/item-group.vue';
import { useItems } from '@/composables/data/use-items';
import { useSales } from '@/composables/data/use-sales';

const items = useItems();
const sales = useSales({ embed : ['items'] });
</script>
