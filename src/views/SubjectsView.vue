<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type Subject } from "../types";
import {
  useFullRemoveSubject,
  useGetAllActiveSubjects,
  useSoftRemoveSubject,
} from "../composables/useSubjectFetch";
import SubjectPreview from "../components/SubjectPreview.vue";
import DeleteSubjectModal from "../components/DeleteSubjectModal.vue";

const subjectsList = ref<Subject[]>([]);
const subject = ref<Subject | null>(null);
const modalVisibility = ref<boolean>(false);

async function getData() {
  try {
    subjectsList.value = await useGetAllActiveSubjects();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

async function softDelete(id: number): Promise<void> {
  try {
    await useSoftRemoveSubject(id);
    window.location.reload();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

async function fullDelete(id: number): Promise<void> {
  try {
    await useFullRemoveSubject(id);
    window.location.reload();
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

function setSubject(u: Subject) {
  subject.value = u;
  modalVisibility.value = true;
}

function resetDataToDelete() {
  subject.value = null;
  modalVisibility.value = false;
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div
    v-if="subjectsList.length > 0"
    id="main-container"
    class="w-full flex flex-col gap-3 p-3 h-[calc(100vh-50px)]"
  >
    <div class="hidden sm:flex sm:justify-end sm:w-full sm:px-5">
      <RouterLink to="/subjects/create" class="p-2 bg-3 rounded-lg text-center"
        >Nueva Asignatura</RouterLink
      >
    </div>
    <header class="px-1">
      <h1 class="text-center text-2xl">Asignaturas</h1>
      <p class="text-center">
        Aquí encontrarás una lista de todas las asignaturas vigentes
      </p>
    </header>
    <main
      class="flex flex-col flex-grow gap-2 overflow-y-auto w-full items-center"
    >
      <div
        class="flex flex-col flex-grow gap-2 overflow-y-auto w-full sm:flex-row sm:flex-wrap sm:flex-grow-0 md:w-10/12 lg:w-full lg:justify-center xl:w-9/12"
      >
        <SubjectPreview
          class="h-fit sm:w-[calc(50%-5px)] lg:w-[calc(33%-5px)]"
          v-for="subject in subjectsList"
          :key="subject.id"
          :subject="subject"
          :toDelete="setSubject"
        />
      </div>
      <div class="flex w-full justify-center sm:hidden">
        <RouterLink
          to="/subjects/create"
          class="w-full p-2 bg-3 rounded-lg text-center"
          >Nueva Asignatura</RouterLink
        >
      </div>
      <DeleteSubjectModal
        :subject="subject"
        :softDelete="softDelete"
        :fullDelete="fullDelete"
        :cancel="resetDataToDelete"
        :visible="modalVisibility"
      />
    </main>
  </div>
  <div v-else class="w-full flex flex-col gap-3 p-3 h-[calc(100vh-50px)]">
    <div class="hidden sm:flex sm:justify-end sm:w-full sm:px-5">
      <RouterLink to="/subjects/create" class="p-2 bg-3 rounded-lg text-center"
        >Nueva Asignatura</RouterLink
      >
    </div>
    <header class="px-1">
      <h1 class="text-center text-2xl">Sin Asignaturas</h1>
      <p class="text-center">
        Parece ser que no tienes ninguna asignatura creada. ¿Te gustaría crear
        una nueva?
      </p>
    </header>
    <main class="flex flex-col justify-end flex-grow">
      <div class="flex w-full justify-center sm:hidden">
        <RouterLink
          to="/subjects/create"
          class="w-full p-2 bg-3 rounded-lg text-center"
          >Nueva Asignatura</RouterLink
        >
      </div>
    </main>
  </div>
</template>
