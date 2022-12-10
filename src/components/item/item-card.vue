<template>
  <div>
    <img :src="props.item.image" />
    <p>Lot #{{ props.item.id }}</p>
    <p>{{ props.item.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Item } from './item.model';

interface IProps {
  item: Item;
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
