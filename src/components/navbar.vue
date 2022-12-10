<template>
  <header>
    <div class="wrapper border-b border-gray-200">
      <nav class="flex h-16 items-center">
        <RouterLink 
          to="/" 
          class="w-[10%] text-sm font-medium transition-colors duration-200 ease-out text-gray-700 hover:text-gray-800"
        >
          Home
        </RouterLink>

        <div class="w-[10%]"></div>
        <form class="w-[60%]" @submit.prevent="$router.push(`/search?q=${query}`)">
          <div class="flex">
            <div class="relative w-full">
              <input 
                type="search" 
                v-model="query"
                id="search-dropdown" 
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-blue-500 focus:border-blue-500 focus:outline-offset-0	" 
                placeholder="Mobilier, voiture, montre, matériel... " 
                required
              >
              <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        <div class="w-[10%]"></div>
        <div class="flex w-[10%]">
          <div class="grow"></div>
          <button 
            class="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100 text-sm font-medium transition-colors duration-200 ease-out text-gray-700 hover:text-gray-800"
            @click="$router.push('/new')"
          >
            Créer vente
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const query = ref("");
</script>
