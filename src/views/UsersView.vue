<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type User } from "../types";
import {
  useFullRemoveUser,
  useGetAllActiveUsers,
  useSoftRemoveUser,
} from "../composables/useFetch";
import UserPreview from "../components/UserPreview.vue";
import DeleteModal from "../components/DeleteUserModal.vue";

const usersList = ref<User[]>([]);
const user = ref<User | null>(null);
const modalVisibility = ref<boolean>(false);

async function getData() {
  try {
    usersList.value = await useGetAllActiveUsers();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

async function softDelete(id: number): Promise<void> {
  try {
    await useSoftRemoveUser(id);
    window.location.reload();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

async function fullDelete(id: number): Promise<void> {
  try {
    await useFullRemoveUser(id);
    window.location.reload();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

function setUser(u: User) {
  user.value = u;
  modalVisibility.value = true;
}

function resetDataToDelete() {
  user.value = null;
  modalVisibility.value = false;
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div
    v-if="usersList.length > 0"
    id="main-container"
    class="w-full flex flex-col gap-3 p-3 h-[calc(100vh-50px)] sm:items-center"
  >
    <div class="hidden sm:flex sm:justify-end sm:w-full sm:px-5">
      <RouterLink to="/users/create" class="p-2 bg-3 rounded-lg text-center"
        >Nuevo Usuario</RouterLink
      >
    </div>
    <header class="px-1">
      <h1 class="text-center text-2xl">Usuarios</h1>
      <p class="text-center">
        Aquí encontrarás una lista con todos los usuarios
      </p>
    </header>
    <main
      class="flex flex-col flex-grow gap-2 overflow-y-auto w-full items-center"
    >
      <div
        class="flex flex-col flex-grow gap-2 overflow-y-auto w-full sm:w-3/4 md:w-2/3 lg:w-full lg:flex-row lg:flex-wrap lg:justify-center lg:flex-grow-0 xl:w-9/12"
      >
        <UserPreview
          class="h-fit lg:w-[calc(50%-10px)]"
          v-for="user in usersList"
          :key="user.id"
          :user="user"
          :toDelete="setUser"
        />
      </div>
      <div class="flex w-full justify-center sm:hidden">
        <RouterLink
          to="/users/create"
          class="w-full p-2 bg-3 rounded-lg text-center"
          >Nuevo Usuario</RouterLink
        >
      </div>
      <DeleteModal
        :user="user"
        :softDelete="softDelete"
        :fullDelete="fullDelete"
        :cancel="resetDataToDelete"
        :visible="modalVisibility"
      />
    </main>
  </div>
  <div v-else class="w-full flex flex-col gap-3 p-3 h-[calc(100vh-50px)]">
    <div class="hidden sm:flex sm:justify-end sm:w-full sm:px-5">
      <RouterLink to="/users/create" class="p-2 bg-3 rounded-lg text-center"
        >Nuevo Usuario</RouterLink
      >
    </div>
    <header class="px-1">
      <h1 class="text-center text-2xl">Sin Usuarios</h1>
      <p class="text-center">
        Parece ser que no tienes ningún usuario registrado. ¿Te gustaría crear
        uno nuevo?
      </p>
    </header>
    <main class="flex flex-col justify-end flex-grow">
      <div class="flex w-full justify-center sm:hidden">
        <RouterLink
          to="/users/create"
          class="w-full p-2 bg-3 rounded-lg text-center"
          >Nuevo Usuario</RouterLink
        >
      </div>
    </main>
  </div>
</template>
