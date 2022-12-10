<template>
  <div>
    <div v-for="(item, index) in props.items" :key="index">
      <ItemCard :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from './item-card.vue';
import type { Item } from './item.model';

interface IProps { 
  items: Item[];
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
