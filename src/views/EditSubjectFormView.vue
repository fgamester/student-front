<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { isSubject, type Subject } from "../types";
import { useRoute, useRouter } from "vue-router";
import {
  useGetSubject,
  useUpdateSubject,
} from "../composables/useSubjectFetch";

const formData = reactive<Partial<Subject>>({
  name: "",
  description: "",
});

const subject = ref<Subject | null>(null);

const router = useRouter();
const paramId = useRoute().params.id;
const subjectId = parseInt(paramId as string, 10);

async function getData() {
  subject.value = await useGetSubject(subjectId);
  if (isSubject(subject.value)) {
    formData.name = subject.value.name;
    formData.description = subject.value.description || "";
  }
}

async function handleSubmit(id: number, data: Partial<Subject>) {
  try {
    const formSubmit = await useUpdateSubject(id, data);
    if (isSubject(formSubmit)) {
      router.push(`/subjects/${formSubmit.id}`);
    }
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

onMounted(() => {
  if (typeof subjectId === "number") getData();
});
</script>

<template>
  <form
    v-if="subject"
    @submit.prevent="handleSubmit(subject?.id, formData)"
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
        Actualizar Datos
      </button>
    </div>
  </form>
  <div v-else>
    <header>
      <h1>Asignatura no encontrada</h1>
    </header>
    <p>La asignatura que intentas editar no existe.</p>
  </div>
</template>
