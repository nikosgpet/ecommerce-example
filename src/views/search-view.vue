<template>
  <main>
    <div class="text-2xl font-bold tracking-tight text-gray-900 mb-4">
      <h1>Search results</h1>
    </div>
    <h2 v-if="sales.value.length > 0" class="text-lg font-bold tracking-tight text-gray-900">Ventes en cours</h2>
    <SaleGroup :sales="sales.value" class="mt-5 mb-8"/>

    <h2 v-if="items.value.length > 0" class="text-lg font-bold tracking-tight text-gray-900">Les plus récents</h2>
    <ItemGroup :items="items.value" class="mt-5 mb-8"/>

    <div 
      v-if="items.value.length === 0 && sales.value.length === 0" 
      class="w-full text-center text-lg tracking-tight text-gray-700">
      Aucun résultat pour "{{ query }}"
    </div>
  </main>
</template>

<script setup lang="ts">
import SaleGroup from '@/components/sale/sale-group.vue';
import ItemGroup from '@/components/item/item-group.vue';
import { useItems } from '@/composables/data/use-items';
import { useSales } from '@/composables/data/use-sales';
import { computed } from 'vue';

interface IProps {
  query: string;
}

const props = withDefaults(defineProps<IProps>(), {})

const items = computed(() => useItems({ query: props.query }))
const sales = computed(() => useSales({ query: props.query, embed : ['items'] }))
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
