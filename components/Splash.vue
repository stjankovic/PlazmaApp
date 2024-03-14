<template>
    <transition name="fade">
      <div v-if="showSplash" class="fixed inset-0 bg-white flex justify-center items-center z-50">
       
        <div class="animate-spin h-6 w-6 border-b-2 border-gray-800 rounded-full"></div>

        <img src='/Plazmateh.png' alt="Toggle" class="w-64 pl-10 aa">
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTimeoutFn } from '@vueuse/core'
  
  const showSplash = ref(true)
  
  useTimeoutFn(() => {
    showSplash.value = false
  }, 3000) // Hide splash screen after 3000 milliseconds (3 seconds)
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  /* Customize your spinner or splash content here */
  </style>
  