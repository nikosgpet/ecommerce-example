<template>
  <div>
    <img :src="props.item.image" />
    <p>Lot #{{ props.item.id }}</p>
    <p>{{ props.item.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IItem } from './item.model';

interface IProps {
  item: IItem;
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
