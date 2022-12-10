<template>
  <div class="flex gap-3">
    <div v-for="(item, index) in props.items" :key="item.id">
      <ItemCard :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from './item-card.vue';
import type { IItem } from './item.model';

interface IProps { 
  items: IItem[];
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
