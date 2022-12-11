<template>
  <main>
    <div class="text-2xl font-bold tracking-tight text-gray-900 mb-4">
      <h1>Créer une vente</h1>
    </div>
    
    <form @submit.prevent="onSubmit">
      <h2 class="text-base font-bold tracking-tight text-gray-900 mb-3">Détails sur la vente</h2>
      <div class="mb-3">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Titre</label>
        <input 
          v-model="formData.title"
          type="text" 
          id="title" 
          class="
            bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          " 
          placeholder="Une nouvelle vente" 
          required
        >
      </div>
      <div class="mb-6">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900">
          Description
        </label>
        <textarea 
          v-model="formData.description"
          id="description" 
          rows="4" 
          class="
            block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
            focus:ring-blue-500 focus:border-blue-500
          " 
          placeholder="Ecrire une description..." 
          required
        />
      </div>
      
      <h2 class="text-base font-bold tracking-tight text-gray-900 mb-3">Lots à vendre</h2>
      <div v-for="(item, index) in formData.items" :key="index" class="flex gap-0 sm:gap-4 items-start mb-1 flex-wrap sm:flex-nowrap">
        <button 
          type="button" 
          class="
            text-white bg-gray-300 focus:ring-4 focus:outline-none 
            focus:ring-gray-200 font-medium rounded-full text-sm p-0.5 text-center inline-flex items-center mr-2
          "
          :class="index === 0 && disableFirst ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-gray-400'"
          :disabled="index === 0 && disableFirst"
          @click="removeItem(index)"
        >
          <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <h2 class="sm:w-[100px] text-sm font-bold tracking-tight text-gray-900 mb-3">Lot {{ index + 1 }}</h2>
        <div class="w-full sm:w-1/2 mb-3">
          <label :for="`description-${index+1}`" class="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea 
            v-model="item.description"
            :id="`description-${index+1}`" 
            rows="2" 
            class="
              block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
              focus:ring-blue-500 focus:border-blue-500
            " 
            placeholder="Ecrire une description..." 
            required
          />
        </div>
        <div class="w-full sm:w-1/2 mb-6">
          <label :for="`image-${index+1}`" class="block mb-2 text-sm font-medium text-gray-900">Titre</label>
          <input 
            v-model="item.image"
            type="url" 
            :id="`image-${index+1}`" 
            class="
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            " 
            placeholder="URL de l'image" 
            required
          >
        </div>
      </div>
      <div class="flex gap-3 mt-3">
        <button 
          class="
            text-gray-900 hover:bg-gray-100 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
          "
          @click="formData.items.push({ saleId: null, description: '', image: '' })"
        >
          Ajouter un lot
        </button>
        <button 
          type="submit" 
          class="
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
          "
        >
          Finaliser vente
        </button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { usePost } from '@/composables/use-post';
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

interface IProps {
  query: string;
}

const props = withDefaults(defineProps<IProps>(), {})

const router = useRouter()


const disableFirst = computed(() => formData.items.length === 1)

const { data: salesData, post: postSales } = usePost('/sales');
const { post: postItems  } = usePost('/items');

const formData = reactive({
  title: '',
  description: '',
  items: [
    {
      saleId: null,
      description: '',
      image: '',
    },
  ]
})

async function onSubmit() {
  const formDataCopy = { ...formData }

  //@ts-ignore
  delete formDataCopy.items

  await postSales(formDataCopy)
  for (const item of formData.items) {
    item.saleId = salesData.value.id
    postItems(item)
  }
  router.push({ name: 'home' })
}

function removeItem(index: number) {
  formData.items.splice(index, 1)
}
</script>
