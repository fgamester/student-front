<script setup lang="ts">
import { reactive } from "vue";
import { isSubject, type Subject } from "../types";
import { useRouter } from "vue-router";
import { usePostSubject } from "../composables/useSubjectFetch";

const formData = reactive<Partial<Subject>>({
  name: "",
  description: "",
});

const router = useRouter();

async function handleSubmit() {
  try {
    const formSubmit = await usePostSubject(formData);
    if (isSubject(formSubmit)) {
      router.push(`/subjects/${formSubmit.id}`);
    }
  } catch (error) {
    console.error("Error en la petición", error);
  }
}
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full flex flex-col px-3 py-3 gap-3"
  >
    <div class="flex flex-col w-full items-start justify-start gap-1">
      <label for="name">Nombre:</label>
      <input
        class="w-full bg-1 text-6 placeholder:text-4 rounded-md p-1"
        type="text"
        id="name"
        v-model="formData.name"
        placeholder="Nombre"
        required
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
        Crear Asignatura
      </button>
    </div>
  </form>
</template>
