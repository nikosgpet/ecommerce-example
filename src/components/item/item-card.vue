<template>
  <article 
    class="
      w-full sm:w-[31.5%] md:w-[23.5%] lg:w-[222px] 2xl:w-[237px] max-w-[360px] mx-auto sm:mx-0
      group cursor-pointer border border-1 border-gray-300 rounded-lg overflow-hidden
    "
  >
    <div class="h-[160px] lg:h-[240px] overflow-hidden bg-black">
      <img 
        :src="props.item.image" 
        class="object-cover h-full w-full group-hover:scale-[1.03] transition-transform group-hover:opacity-95"
      />
    </div>
    <div class="py-4 px-3 group-hover:bg-gray-50/50 transition-colors">
      <h3 class="text-sm font-medium text-gray-900">Lot #{{ props.item.id }}</h3>
      <p class="mt-1 text-sm text-gray-500 line-clamp-2 h-[40px]">{{ props.item.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IItem } from './item.model';

interface IProps {
  item: IItem;
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
