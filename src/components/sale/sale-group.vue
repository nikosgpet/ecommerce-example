<template>
  <div class="flex gap-3 w-full flex-wrap">
    <template v-for="(sale, index) in props.sales" :key="sale.id">
      <SaleCard :sale="sale" />
    </template>
  </div>
</template>

<script setup lang="ts">
import SaleCard from './sale-card.vue';
import type { ISale } from './sale.model';

interface IProps { 
  sales: ISale[];
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
