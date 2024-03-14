<template>
    <div :class="sidebarOpen ? 'w-40' : 'w-16'" class="h-full bg-gray-300 text-white fixed flex flex-col transition-width duration-100 ease-in-out">
      <div class="p-5">
        <button @click="toggleSidebar" class="text-gray-800">
          <img :src="sidebarOpen ? '/icons/close.png' : '/favicon.png'" alt="Toggle" class="h-6 w-6">
        </button>
      </div>
      <ul class="flex-1 space-y-3 text-lg text-gray-800">
        <li v-for="item in menuItems" :key="item.text" class="flex items-center justify-start">
          <NuxtLink :to="item.path" class="flex items-center py-2.5 px-4 w-full hover:bg-gray-100">
            <img :src="`/icons/${item.icon}.png`" alt="" class="h-6 w-6 my-7">
            <span :class="sidebarOpen ? 'block' : 'hidden'" class="ml-2">{{ item.text }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const sidebarOpen = ref(false)
  
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }
  
  const menuItems = ref([
  { text: 'Machine', icon: 'machine', path: '/machine' },
  { text: 'Parameters', icon: 'parameters', path: '/parameters' },
  { text: 'Alarms', icon: 'alarms', path: '/alarms' },
  { text: 'Limits', icon: 'limits', path: '/limits' },
  { text: 'Recipes', icon: 'recipes', path: '/recipes' },
  { text: 'Network', icon: 'network', path: '/network' },
  { text: 'Devices', icon: 'devices', path: '/devices' },
  { text: 'Settings', icon: 'settings', path: '/settings' },
  { text: 'License', icon: 'license', path: '/license' }
])
  </script>
  
  <style lang="scss">
  .transition-width {
    transition-property: width;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }
  span {
    display: block;
    max-height: 24px;
  }
  
  /* Add more custom styles as needed */
  </style>
  