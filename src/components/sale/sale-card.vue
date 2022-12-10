<template>
  <article class="w-[270px] group cursor-pointer border border-1 border-gray-300 rounded-lg overflow-hidden">
    <div class="flex gap-0.5 h-[160px]">
      <div class="overflow-hidden bg-black" :class="[has2ndImage ? 'w-1/2' : 'w-full']">
        <img :src="props.sale.items?.[0].image" class="object-cover h-full hover:scale-105 transition-all group-hover:opacity-95 hover:!opacity-100" />
      </div>
      <div v-if="has2ndImage" class="flex flex-col w-1/2 gap-1">
        <div class="overflow-hidden bg-black" :class="[has3rdImage ? 'h-1/2' : 'h-full']">
          <img :src="props.sale.items?.[1]?.image" class="object-cover w-full hover:scale-105 transition-all group-hover:opacity-95 hover:!opacity-100" />
        </div>
        <div v-if="has3rdImage" class="h-1/2 overflow-hidden bg-black">
          <img :src="props.sale.items?.[2]?.image" class="object-cover w-full hover:scale-105 transition-all group-hover:opacity-95 hover:!opacity-100" />
        </div>
      </div>
    </div>
    <div class="py-4 px-3 group-hover:bg-gray-50/50 transition-colors">
      <h3 class="text-sm font-medium text-gray-900">{{ props.sale.title }}</h3>
      <p class="mt-1 text-sm text-gray-500 line-clamp-2">{{ props.sale.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ISale } from './sale.model';

interface IProps {
  sale: ISale;
}

const props = withDefaults(defineProps<IProps>(), {})

const has2ndImage = computed(() => !!props.sale.items?.[1]?.image)
const has3rdImage = computed(() => !!props.sale.items?.[2]?.image)
</script>
