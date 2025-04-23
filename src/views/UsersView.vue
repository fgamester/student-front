<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type User } from "../types";
import { useGetAllActiveUsers } from "../composables/useFetch";
import UserPreview from "../components/UserPreview.vue";

const usersList = ref<User[]>([]);

async function getData() {
  try {
    usersList.value = await useGetAllActiveUsers();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="w-full flex flex-col gap-3 p-2">
    <header class="px-1">
      <h1 class="text-center text-2xl">
        Usuarios
      </h1>
      <p>Aquí encontrarás una lista con todos los usuarios</p>
    </header>
    <main class="flex flex-col gap-1">
      <UserPreview v-for="user in usersList" :key="user.id" :user="user" />
    </main>
  </div>
</template>
