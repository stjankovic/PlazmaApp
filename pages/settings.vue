<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="account">
            Select Account
          </label>
          <select id="account" v-model="selectedAccount" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option v-for="account in accounts" :value="account" :key="account.id">{{ account.name }}</option>
          </select>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="showModal = true">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
  <KeyboardModal :show="showModal" @update:show="showModal = $event" @confirm="onConfirm" />
</template>
  

<script setup>
import { ref } from 'vue';

const accounts = ref([
  { id: 1, name: 'Operator' },
  { id: 2, name: 'Manager' },
  { id: 3, name: 'Technical Support' },
]);

const selectedAccount = ref(accounts.value[0]); // Default selection

const showModal = ref(false);

function onConfirm(password) {
  console.log('Confirmed with password:', password);
  // Here you can implement your authentication logic
  // For now, let's just log the password
}

</script>
<style lang="scss">
</style>