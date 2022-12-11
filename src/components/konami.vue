<template>
  <div v-if="state.showGif" class="fixed w-full max-w-[400px] h-full max-h-[300px] top-0 bottom-0 left-0 right-0 m-auto">
    <div style="width:100%;height:0;padding-bottom:75%;position:relative;">
      <iframe 
        src="https://giphy.com/embed/OocLVILtd7ybm" 
        width="100%" 
        height="100%" 
        style="position:absolute" 
        frameBorder="0" 
        class="giphy-embed" 
        allowFullScreen
      >
      </iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';

const state = reactive({
  showGif: false,
});

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let index = 0;

function handleKeydown(event: KeyboardEvent) {
  if (event.key === konamiCode[index]) {
    index++;

    if (index === konamiCode.length) {
      state.showGif = true;
      index = 0;
    }
  } else {
    index = 0;
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', () => {
    state.showGif = false;
  });
});
</script>
