<script setup lang="ts">
import { reactive } from "vue";
import { isUser, type User } from "../types";
import { usePostUser } from "../composables/useFetch";
import { useRouter } from "vue-router";

const formData = reactive<Partial<User>>({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  description: "",
});

const router = useRouter();

async function handleSubmit() {
  try {
    const formSubmit = await usePostUser(formData);
    if (isUser(formSubmit)) {
        router.push(`/users/${formSubmit.id}`);
    }
  } catch (error) {
    console.error("Error en la petición", error);
  }
}
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full flex flex-col px-3 py-3 gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:w-3/4 md:mx-auto lg:w-2/3 xl:w-1/2"
  >
    <div class="flex flex-col w-full items-start justify-start gap-1 sm:w-[calc(50%-10px)]">
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
    <div class="flex flex-col w-full items-start justify-start gap-1 sm:w-[calc(50%-10px)]">
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
    <div class="flex flex-col w-full items-start justify-start gap-1 sm:w-[calc(50%-10px)]">
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
    <div class="flex flex-col w-full items-start justify-start gap-1 sm:w-[calc(50%-10px)]">
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
        Crear Usuario
      </button>
    </div>
  </form>
</template>
