<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white rounded-lg shadow p-8 m-4 max-w-xs max-h-full overflow-y-auto">
        <div class="mb-4">
          <p class="text-lg">Enter Password</p>
          <input type="password" v-model="password" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" disabled/>
        </div>
        <!-- Keyboard Layout -->
        <div class="grid grid-cols-3 gap-4">
          <button v-for="key in keys" :key="key" @click="appendKey(key)" class="bg-gray-200 rounded-full text-lg font-semibold p-4 focus:outline-none">
            {{ key }}
          </button>
        </div>
        <div class="flex justify-between mt-4">
          <button @click="deleteKey" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
          <button @click="confirm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Confirm</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    show: Boolean
  });
  
  const emits = defineEmits(['update:show', 'confirm']);
  
  const password = ref('');
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  
  function appendKey(key) {
    password.value += key;
  }
  
  function deleteKey() {
    password.value = password.value.slice(0, -1);
  }
  
  function confirm() {
    emits('confirm', password.value);
    password.value = ''; // Reset after confirming
    emits('update:show', false);
  }
  </script>
  