<template>
  <main>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Ventes en cours</h2>
    <SaleGroup :sales="sales" class="mt-5 mb-8"/>

    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Les plus récents</h2>
    <ItemGroup :items="items" class="mt-5 mb-8"/>
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
