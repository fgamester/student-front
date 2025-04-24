<script setup lang="ts">
import { onMounted, ref } from "vue";
import { type Subject } from "../types";
import { useRoute } from "vue-router";
import { useGetSubject } from "../composables/useSubjectFetch";

const paramId = useRoute().params.id;
const subjectId = parseInt(paramId as string, 10);

const subject = ref<Subject | null>(null);

async function getData() {
  subject.value = await useGetSubject(subjectId);
}

onMounted(() => {
  if (typeof subjectId === "number") getData();
});
</script>
<template>
  <div id="main-container" class="flex flex-col bg-5 text-1 p-3 gap-2 sm:items-center sm:gap-3">
    <header>
      <h1 class="text-2xl text-center">Datos de la Asignatura</h1>
    </header>
    <main class="bg-transparent sm:w-fit sm:bg-4 sm:p-4 sm:rounded-xl md:w-2/3 lg:w-1/2">
      <div id="f-name">
        <p>
          <b>Nombre:</b>
          {{ subject?.name }}
        </p>
      </div>
      <div id="description">
        <p class="break-words">
          <b>Descripción:</b>
          {{
            subject?.description && subject.description.length > 0
              ? subject.description
              : "No hay descripción."
          }}
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
#main-container {
  min-height: calc(100vh - 50px);
}
</style>
