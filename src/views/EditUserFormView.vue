<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { isUser, type User } from "../types";
import { useGetUser, useUpdateUser } from "../composables/useFetch";
import { useRoute, useRouter } from "vue-router";

const formData = reactive<Partial<User>>({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  description: "",
});

const user = ref<User | null>(null);

const router = useRouter();
const paramId = useRoute().params.id;
const userId = parseInt(paramId as string, 10);

async function getData() {
  user.value = await useGetUser(userId);
  if (isUser(user.value)){
    formData.firstName = user.value.firstName;
    formData.lastName = user.value.lastName;
    formData.email = user.value.email;
    formData.phoneNumber = user.value.phoneNumber || "";
    formData.address = user.value.address || "";
    formData.description = user.value.description || "";
  }
}

async function handleSubmit(id: number, data: Partial<User>) {
  try {
    const formSubmit = await useUpdateUser(id, data);
    if (isUser(formSubmit)) {
      router.push(`/users/${formSubmit.id}`);
    }
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

onMounted(() => {
  if (typeof userId === "number") getData();
});
</script>

<template>
  <form
    v-if="user"
    @submit.prevent="handleSubmit(user?.id, formData)"
    class="w-full flex flex-col px-3 py-3 gap-3"
  >
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="f-name">Nombre:</label>
      <input
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1"
        type="text"
        id="f-name"
        v-model="formData.firstName"
        placeholder="Nombre"
        required
      />
    </div>
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="l-name">Apellido:</label>
      <input
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1"
        type="text"
        id="l-name"
        v-model="formData.lastName"
        placeholder="Apellido"
        required
      />
    </div>
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="email">E-Mail:</label>
      <input
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1"
        type="email"
        id="email"
        v-model="formData.email"
        placeholder="E-Mail"
        required
      />
    </div>
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="phone">Telefono:</label>
      <input
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1"
        type="tel"
        id="phone"
        v-model="formData.phoneNumber"
        placeholder="Telefono"
      />
    </div>
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="address">Dirección:</label>
      <textarea
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1 resize-none"
        rows="2"
        id="address"
        v-model="formData.address"
        placeholder="Dirección"
      />
    </div>
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="description">Descripción:</label>
      <textarea
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1 resize-none"
        rows="4"
        id="description"
        v-model="formData.description"
        placeholder="Descripción"
      ></textarea>
    </div>
    <div class="w-full">
      <button class="bg-2 text-6 p-2 rounded-md w-full mt-3" type="submit">
        Actualizar Datos
      </button>
    </div>
  </form>
  <div v-else>
    <header>
      <h1>Usuario no encontrado</h1>
    </header>
    <p>El usuario que intentas editar no existe.</p>
  </div>
</template>
