<template>
  <div>
    <div v-for="(item, index) in props.sale.items?.slice(0, 3)">
      <img :src="item.image" />
    </div>
    <p>Lot #{{ props.sale.id }}</p>
    <p>{{ props.sale.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ISale } from './sale.model';

interface IProps {
  sale: ISale;
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
